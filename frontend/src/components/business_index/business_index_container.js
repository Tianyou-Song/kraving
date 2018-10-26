import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { yelpSearch } from '../../util/yelp_api_util';

const mapStateToProps = ( { entities }, ownProps ) => {
  const { searchTerm } = ownProps.match.params;
  const { location, search  } = entities;

  return {
    location,
    searchTerm,
    search
  }
};

const mapDispatchToProps = dispatch => ({
  yelpSearch: (searchInfo) => dispatch(yelpSearch(searchInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
