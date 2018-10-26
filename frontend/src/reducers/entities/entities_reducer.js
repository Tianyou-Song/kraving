import { combineReducers } from 'redux';

import users from './users_reducer';
import search from './search_reducer';
import location from './location_reducer';

export default combineReducers({
  users,
  search,
  location
});
