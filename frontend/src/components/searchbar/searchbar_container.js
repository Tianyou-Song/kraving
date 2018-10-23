import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { yelpSearch } from '../../util/yelp_api_util';

const mapStateToProps = ( { entities } ) => {

  const { search } = entities;

  return {
    search
  };

const mapDispatchToProps = dispatch => ({
  yelpSearch: (searchInfo) => dispatch(yelpSearch(searchInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
