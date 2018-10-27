import {
  RECEIVE_ZOM_REVIEWS
} from '../../../util/zomato_api_util';

import {
CLEAR_REVIEWS
} from '../../../util/yelp_api_util';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ZOM_REVIEWS:
      return action.payload
    case CLEAR_REVIEWS:
      return {}
    default:
      return state;
  }
};

export default reviewsReducer;
