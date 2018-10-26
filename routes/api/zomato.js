const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = 'd709ef3a02827cf8cd9370b667de5c25';

router.get('/search', (req, res) => {
  const { location } = req.query;
  axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&types=geocode&key=${apiKey}`
  )
  .then(response => {
    const { predictions } = response.data;
    res.send(predictions);
  })
  .catch(e => {
    console.log(e);
  });
});

module.exports = router;
