import {
  RECEIVE_REVIEWS
} from '../../util/yelp_api_util';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      const new_state = {}
      action.payload.reviews.forEach(review => new_state[review.id] = review)
      // return {...state, ...new_state}
      return action.payload.reviews
    default:
      return state;
  }
};

export default reviewsReducer;
