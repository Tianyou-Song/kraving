import {
  SET_SEARCH_RESULTS,
  GET_BIZ
} from '../../util/yelp_api_util';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_SEARCH_RESULTS:
    const new_state = {}
    action.payload.forEach(biz => new_state[biz.id] = biz)
    return {...state, ...new_state}
    case GET_BIZ:
      return  {...state, ...{[action.business.id]: action.business}};
    default:
      return state;
  }
};

export default searchReducer;
