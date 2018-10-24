const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const yelp = require('./routes/api/yelp');
const passport = require('passport');
require('./config/passport')(passport);


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/test', (req, res) => {
  res.send('Hello, test!');
});

app.use("/api/users", users);
app.use("/api/yelp", yelp);

const port = process.env.PORT || 5000;

app.listen(6000, () => console.log(`Server is running on port 6000`));
