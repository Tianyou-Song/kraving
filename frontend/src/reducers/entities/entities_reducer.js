import { combineReducers } from 'redux';

import users from './users_reducer';
import search from './search_reducer';

export default combineReducers({
  users,
  search
});
