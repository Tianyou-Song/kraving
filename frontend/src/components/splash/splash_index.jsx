import React from 'react';
import Header from '../header/header';
import { logoutUser } from '../../util/session_api_util'

class SplashIndex extends React.Component {
  handleLogout() {
    logoutUser();
  }

  render() {
      return (
      <div className="splash-index-container">
        <Header />
        <h1>Hello World, Splash Index Page!</h1>
        <div className="logout" onClick={()=>this.handleLogout()}>Log out</div>
      </div>
    );
  }
}

export default SplashIndex;
