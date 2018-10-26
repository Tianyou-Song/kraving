import React from 'react';
import Header from '../header/header_container';


class SplashIndex extends React.Component {
  render() {
      return (
      <div className="splash-index-container">
        <Header value="xyz"/>
        <h1>Hello World, Splash Index Page!</h1>
      </div>
    );
  }
}

export default SplashIndex;
