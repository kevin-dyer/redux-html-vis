import React from 'react'
import { connect } from 'react-redux'
import UserRegistration from '../components/UserRegistration'

const mapStateToProps = (state, ownProps) => {
  return {
    onSignInPage: ownProps.location.pathname === '/user/signin'
  }
}

const UserRegistrationContainer = connect(mapStateToProps)(UserRegistration)

export default UserRegistrationContainer