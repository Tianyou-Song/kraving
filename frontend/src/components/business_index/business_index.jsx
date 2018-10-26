import React from 'react';
import IndexContainer from '../index_page/index_container';

class BusinessIndex extends React.Component {

  componentDidMount() {
    const { yelpSearch, location, searchTerm, search } = this.props;
    const searchInfo = {term: searchTerm, location: location, limit: 10}

    if (Object.keys(search).length <= 0) {
      yelpSearch(searchInfo)
    }
  }

  component
  render() {
    const { searchTerm } = this.props;
    return (
      <IndexContainer searchTerm={searchTerm}/>
    )
  }
}

export default BusinessIndex
