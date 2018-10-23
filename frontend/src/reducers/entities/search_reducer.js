import { SET_SEARCH_RESULTS } from '../../util/yelp_api_util';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
