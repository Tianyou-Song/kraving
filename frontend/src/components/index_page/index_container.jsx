import { connect } from 'react-redux';
import Index from './index';
import { yelpSearch } from '../../util/yelp_api_util';

const mapStateToProps = ( { entities } ) => {

  const { location, search } = entities;
  return {
    location,
    search
  }
};

const mapDispatchToProps = dispatch => ({
  yelpSearch: (searchInfo) => dispatch(yelpSearch(searchInfo)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
