import React from 'react';
import SearchBarContainer from '../searchbar/searchbar_container';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  renderLogout() {
    if (this.props.currentUser) {
      return (
        <div className="logout" onClick={() => this.handleLogout()}>Log out</div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="header-container">

        <div className="header-logo">
          <span className="header-title">KRAVING</span>
        </div>

        <SearchBarContainer />
        {this.renderLogout()}
      </div>
    );
  }
}

export default Header;
