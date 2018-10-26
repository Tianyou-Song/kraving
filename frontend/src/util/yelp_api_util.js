import axios from 'axios';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const GET_BIZ = 'GET_BIZ'


export const setSearchResults = payload => {
  return {
    type: SET_SEARCH_RESULTS,
    payload
  };
};

export const getBiz = business => {
  return {
    type: GET_BIZ,
    business
  }
}


export const yelpTest = (searchInfo) => dispatch => {
  axios
    .get('/api/yelp/search', {
    params: {
      searchInfo
    }})
    .then(res => {
      const businesses = res.data
      dispatch(setSearchResults(businesses))
    })
    .catch(err => {
      console.log(err);
    });
}


export const yelpBiz = (id) => dispatch => {
  // debugger
  axios
    .get('/api/yelp/biz', {
    params: {
      id
    }})
    .then(res => {
      // debugger
      const business = res.data
      dispatch(getBiz(business))
    })
    .catch(err => {
      console.log(err);
    });
}
