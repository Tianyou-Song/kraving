import axios from 'axios';
export const RECEIVE_ZOM_REVIEWS = 'RECEIVE_ZOM_REVIEWS';

export const receiveZomReviews = payload => {
  return {
    type: RECEIVE_ZOM_REVIEWS,
    payload
  }
}

export const getZomatoReviews = (searchInfo) => dispatch => {
  axios
    .get('/api/zomato/search', {
    params: {
      searchInfo
    }})
    .then(res => {
      const reviews = res.data
      dispatch(receiveZomReviews(reviews))
    })
    .catch(err => {
      console.log(err);
    });
}
