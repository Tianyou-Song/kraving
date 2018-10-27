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

  renderAuthButton() {
    if (this.props.currentUser.id) {
      return (
        <div className="logout-button" onClick={() => this.handleLogout()}>Log out</div>
      );
    } else {
      return (
        <div className="auth-links">
            <Link className="login-link" to="/login">Login</Link>
            <Link className="signup-link" to="/signup">Signup</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header-container">

        <div className="header-logo">
          <Link to='/' className='header-title'>
            KRAVING
          </Link>
        </div>

        <SearchBarContainer />
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default Header;
