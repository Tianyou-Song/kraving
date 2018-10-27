import {
  RECEIVE_YELP_REVIEWS
} from '../../../util/yelp_api_util';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_YELP_REVIEWS:
      return action.payload.reviews
    default:
      return state;
  }
};

export default reviewsReducer;
