import {
  SET_SEARCH_RESULTS,
  GET_BIZ
} from '../../util/yelp_api_util';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload;
    case GET_BIZ:
      return  {...state, ...{[action.business.id]: action.business}};
    default:
      return state;
  }
};

export default searchReducer;
