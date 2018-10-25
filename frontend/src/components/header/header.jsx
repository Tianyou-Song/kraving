import React from 'react';
import SearchBar from '../searchbar/searchbar';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  handleLogout() {
    console.log(this.props)
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-logo">
          {/* <img src="https://i.imgur.com/2yLouYp.png" className="header-logo-image"/> */}
          <span className="header-title">KRAVING</span>
        </div>
        <div className="logout" onClick={()=>this.handleLogout()}>Log out</div>
        <SearchBar />
      </div>
    )
  }
}

export default Header;
