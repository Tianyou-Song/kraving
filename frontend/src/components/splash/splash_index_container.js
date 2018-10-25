import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../util/session_api_util'
import SplashIndex from './splash_index';

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(SplashIndex);
