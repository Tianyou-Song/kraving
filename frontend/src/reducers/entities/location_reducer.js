import {
  SET_LOCATION,
} from '../../util/yelp_api_util';

const locationReducer = (state = 'San Franciso', action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
