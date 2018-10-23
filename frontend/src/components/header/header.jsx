import React from 'react';
import SearchBar from '../searchbar/searchbar';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        
        <div className="header-logo">
          <img src="https://i.imgur.com/2yLouYp.png" className="header-logo-image"/>
        </div>
        <SearchBar />
      </div>
    )
  }
}

export default Header;
