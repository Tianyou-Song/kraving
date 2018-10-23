import React from 'react';
import SearchBar from '../searchbar/searchbar';

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <SearchBar />
      </div>
    )
  }
}

export default Header;
