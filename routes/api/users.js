const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router();
// for storing hashed passwords in our database
const User = require('../../models/User.js');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email});
});

// making a new post route for /register
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({name: req.body.name}).then(user => {
    if (user) {
      return res.status(400).json({name: 'That username has already been taken'});
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(userInfo => {
            const payload = { id: userInfo.id, name: userInfo.name, email: userInfo.email };
            jsonwebtoken.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer' + token
              });
            });
          })
          .catch(error => console.log(error));
        });
      });
    }
  });

});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if(!user) {
        return res.status(400).json({email: 'This user does not exist'});
      }
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, name: user.name, email: user.email };
          jsonwebtoken.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
            res.json({
              success: true,
              token: 'Bearer' + token
            });
          });
        } else {
          return res.status(400).json({password: 'Incorrect Password'});
        }
      });
    });
});

router.get("/test", (req, res) => res.send('working users router!'));

module.exports = router;
