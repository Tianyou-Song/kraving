import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../util/session_api_util'
import Header from './header';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
