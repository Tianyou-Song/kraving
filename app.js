const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const yelp = require('./routes/api/yelp');
const google = require('./routes/api/google');
const zomato = require('./routes/api/zomato');
const passport = require('passport');
const path = require('path');
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


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
app.use("/api/google", google);
app.use("/api/zomato", zomato);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server is running on port 6000`));
