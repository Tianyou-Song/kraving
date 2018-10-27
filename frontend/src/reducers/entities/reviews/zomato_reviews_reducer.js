import {
  RECEIVE_ZOM_REVIEWS
} from '../../../util/zomato_api_util';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ZOM_REVIEWS:
      return action.payload
    default:
      return state;
  }
};

export default reviewsReducer;
