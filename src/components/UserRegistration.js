import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import RegistrationFormContainer from "../containers/RegistrationFormContainer"
import SignUpIcon from 'material-ui/svg-icons/content/send'
import SignInIcon from 'material-ui/svg-icons/action/fingerprint'
import AuthLink from '../containers/AuthLink'


const SIGN_IN_TEXT = 'Sign in'
const SIGN_UP_TEXT = 'Sign up'
const iconStyle = {
  marginRight: 20,
  marginLeft: -20
}
const paperStyle = {
  margin: 20,
  padding: 20,
  display: 'inline-block',
  maxWidth: 400
}

const UserRegistration = ({ onSignInPage }) => (
  <div className="registration-container" >
    <Paper style={paperStyle} zDepth={4} >
      <h2>
        { 
          onSignInPage ?
            <SignInIcon style={iconStyle} />
          : <SignUpIcon style={iconStyle} />
        }
        { onSignInPage ? SIGN_IN_TEXT : SIGN_UP_TEXT }
      </h2>

      <RegistrationFormContainer onSignInPage={onSignInPage} />
    </Paper>
    <div className="registration-footer">
      <AuthLink
        label={ "or " + (onSignInPage ? SIGN_UP_TEXT : SIGN_IN_TEXT) + "!" }
        primary={true}
        noIcon={true}
      />
    </div>
  </div>
)

UserRegistration.propTypes = {
  onSignInPage: PropTypes.bool.isRequired
}

export default UserRegistration