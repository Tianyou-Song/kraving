import React from 'react'
import GoogleMap from './google_map'

class Search extends React.Component {

  render(){
    return(
      <div className="search">
        <h5>Search is here</h5>
        <GoogleMap />
      </div>
    )
  }
};

export default Search;
