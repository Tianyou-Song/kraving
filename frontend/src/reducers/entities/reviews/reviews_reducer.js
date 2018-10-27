import { combineReducers } from 'redux';

import yelpReviews from './yelp_reviews_reducer';
import zomatoReviews from './zomato_reviews_reducer';

export default combineReducers({
  yelpReviews,
  zomatoReviews
});
