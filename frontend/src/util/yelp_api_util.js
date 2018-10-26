import axios from 'axios';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const GET_BIZ = 'GET_BIZ';
export const SET_LOCATION = 'SET_LOCATION';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    location
  };
};

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


export const receiveReviews = payload => {
  return {
    type: RECEIVE_REVIEWS,
    payload
  }
}


export const yelpSearch = (searchInfo) => dispatch => {
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
  axios
    .get('/api/yelp/biz', {
    params: {
      id
    }})
    .then(res => {
      const business = res.data
      dispatch(getBiz(business))
    })
    .catch(err => {
      console.log(err);
    });
}

export const yelpReviews = (id) => dispatch => {
  axios
    .get('/api/yelp/reviews', {
    params: {
      id
    }})
    .then(res => {
      const reviews = res.data
      dispatch(receiveReviews(reviews))
    })
    .catch(err => {
      console.log(err);
    });
}
