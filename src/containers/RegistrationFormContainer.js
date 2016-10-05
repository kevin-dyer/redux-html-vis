import React from 'react'
import { connect } from 'react-redux'
import { fetchUserIfNeeded, upateUserCredentials } from '../actions'
import RegistrationForm from '../components/RegistrationForm'


const mapStateToProps = (state, ownProps) => ({
  userCredentials: state.userCredentials,
  onSignInPage: ownProps.onSignInPage
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserIfNeeded: () => dispatch(fetchUserIfNeeded()),
  upateUserCredentials: (credentials) => dispatch(upateUserCredentials(credentials))
})

const RegistrationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RegistrationFormContainer

