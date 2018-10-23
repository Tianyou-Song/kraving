const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

const apiKey = 'bv99Hp2Y-gkKwKd9ASxC9fgh-SzkjvVWhUser2vFKvErOnKFrHJLvKlFPIhFRqF_cvhsO4qmQ8MMMEMc78LgeTSf83zDXef8hBo11QAjzrjuabOmb7TmIOQuYAbNW3Yx';
const client = yelp.client(apiKey);

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const yelpSearch = () => client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  return prettyJson;
}).catch(e => {
  console.log(e);
});
// router.get('/search', (req, res) => res.send('working route!'));
router.get('/search', (req, res) => {
  yelpSearch().then(yelpResponse => {
    res.send(yelpResponse);
  });
});



module.exports = router;
