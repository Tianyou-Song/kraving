// const yelp = require('yelp-fusion');
//
// // Place holder for Yelp Fusion's API Key. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const apiKey = 'bv99Hp2Y-gkKwKd9ASxC9fgh-SzkjvVWhUser2vFKvErOnKFrHJLvKlFPIhFRqF_cvhsO4qmQ8MMMEMc78LgeTSf83zDXef8hBo11QAjzrjuabOmb7TmIOQuYAbNW3Yx';
//
// const searchRequest = {
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };
//
// const client = yelp.client(apiKey);
//
// const yelpSearch = () => client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });
//
// export default yelpSearch;

import axios from 'axios';

// const yelpTest = () => {
//   axios.get('/test').then(res => {
//     return res;
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

export const yelpTest = () => {
  axios
    .get('/api/yelp/search')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

}
