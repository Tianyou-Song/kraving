import axios from 'axios';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';


export const setSearchResults = payload => {
  debugger;
  return {
    type: SET_SEARCH_RESULTS,
    payload
  };
};


export const yelpTest = (searchInfo) => dispatch => {
  axios
    .get('/api/yelp/search', {
    params: {
      searchInfo
    }})
    .then(res => {
      const businesses = res.data
      debugger;
      dispatch(setSearchResults(businesses))
    })
    .catch(err => {
      console.log(err);
    })

}
