import React from 'react';
import SearchBarContainer from '../searchbar/searchbar_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">

        <div className="header-logo">
          <img src="https://i.imgur.com/2yLouYp.png" className="header-logo-image"/>
        </div>
        <SearchBarContainer />
      </div>
    )
  }
}

export default Header;
