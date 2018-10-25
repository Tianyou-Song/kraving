import React from 'react';
import Header from '../header/header_container';


class SplashIndex extends React.Component {
  componentDidMount() {
    console.log('splash index', this.props)
  }

  render() {
      return (
      <div className="splash-index-container">
        <Header />
        <h1>Hello World, Splash Index Page!</h1>
      </div>
    );
  }
}

export default SplashIndex;
