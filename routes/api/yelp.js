const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

const apiKey = 'bv99Hp2Y-gkKwKd9ASxC9fgh-SzkjvVWhUser2vFKvErOnKFrHJLvKlFPIhFRqF_cvhsO4qmQ8MMMEMc78LgeTSf83zDXef8hBo11QAjzrjuabOmb7TmIOQuYAbNW3Yx';
const client = yelp.client(apiKey);


const yelpSearch = (searchRequest) => {
  return (
    client.search(searchRequest).then(response => {
      const { businesses } = response.jsonBody;
      return businesses;
    }).catch(e => {
      console.log(e);
    })
  );
};

router.get('/search', (req, res) => {
  const { searchInfo } = req.query;
  const parsed = JSON.parse(searchInfo);
  yelpSearch(parsed).then(yelpResponse => {
    res.send(yelpResponse);
  });
});


module.exports = router;
