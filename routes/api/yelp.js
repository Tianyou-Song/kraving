const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const axios = require('axios');


const apiKey = 'bv99Hp2Y-gkKwKd9ASxC9fgh-SzkjvVWhUser2vFKvErOnKFrHJLvKlFPIhFRqF_cvhsO4qmQ8MMMEMc78LgeTSf83zDXef8hBo11QAjzrjuabOmb7TmIOQuYAbNW3Yx';
const client = yelp.client(apiKey);


const yelpSearch = (searchRequest) => {
  debugger;
  return (
    client.search(searchRequest).then(response => {
      const { businesses } = response.jsonBody;
      return businesses;
    }).catch(e => {
      console.log(e);
    })
  );
};

const yelpGet = (id) => {
  return (
    client.business(id).then(response => {
      const business = response.jsonBody;
      return business;
    }).catch(e => {
      console.log(e);
    })
  );
};

router.get('/biz', (req, res) => {
  const id = req.query.id;
  yelpGet(id).then(yelpResponse => {
    res.send(yelpResponse);
  });
});

router.get('/search', (req, res) => {
  const { searchInfo } = req.query;
  const parsed = JSON.parse(searchInfo);
  yelpSearch(parsed).then(yelpResponse => {
    res.send(yelpResponse);
  });
});


module.exports = router;
