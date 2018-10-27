const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = 'd709ef3a02827cf8cd9370b667de5c25';

router.get('/search', (req, res) => {
  const { searchInfo } = req.query;
  const parsed = JSON.parse(searchInfo);
  axios.get(
    'https://developers.zomato.com/api/v2.1/search', {
      params: {
      q: parsed.q,
      lat: parsed.lat,
      lon: parsed.lon,
      count: 1,
    },
    headers: {
      'user-key': apiKey
    }
    })
  .then(response => {
    const business = response.data.restaurants[0].restaurant;

    axios.get('https://developers.zomato.com/api/v2.1/reviews', {
      params: {
        res_id: business.id
      },
      headers: {
        'user-key': apiKey
      }
    }).then(reviewResponse => {
      const reviewsInfo = reviewResponse.data;
      res.send(reviewsInfo);
    }).catch(e => {
      console.log(e);
    });
  })
  .catch(e => {
    console.log(e);
  });
});

module.exports = router;
