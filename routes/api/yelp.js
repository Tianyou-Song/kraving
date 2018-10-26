const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const axios = require('axios');


const apiKey = 'xU7tcXILJQTtezGRreczXX9fEfEr71ExuzEL20cLkvBBMefO81OAQ_xBJfrT70WFFJfhevJqP1sOb4UEe3bK5CyqXsgiksq332p1S3S4UnkrJuS8UBXGFWllYHnTW3Yx';
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

const yelpReviews = (id) => {
  return (
    client.reviews(id).then(response => {
      const reviews = response.jsonBody;
      return reviews;
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

router.get('/reviews', (req, res) => {
  const id = req.query.id;
  yelpReviews(id).then(yelpResponse => {
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
