import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import SignInIcon from 'material-ui/svg-icons/action/exit-to-app'
import RaisedButton from 'material-ui/RaisedButton'

const inputStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
}
const submitStyle = {
  textAlign: 'right',
  margin: '10px 40px 0 40px'
}

const RegistrationForm = ({ userCredentials, fetchUserIfNeeded, upateUserCredentials, onSignInPage }) => {
  return (
    <div>
      { !onSignInPage ?
        <TextField
          key="name"
          floatingLabelText="Name"
          type="text"
          inputStyle={inputStyle}
          onChange={(e) => {
            upateUserCredentials({name: e.target.value})
          }}
        />
        : null
      } 
      <TextField
        key="email"
        floatingLabelText="Email"
        type="text"
        inputStyle={inputStyle}
        onChange={(e) => {
            upateUserCredentials({email: e.target.value})
          }}
      />
      <TextField
        key="password"
        floatingLabelText="Password"
        type="password"
        inputStyle={inputStyle}
        onChange={(e) => {
          upateUserCredentials({password: e.target.value})
        }}
      />
      { !onSignInPage ?
        <TextField
          key="passwordConfirmation"
          floatingLabelText="Password Confirmation"
          type="password"
          inputStyle={inputStyle}
          onChange={(e) => {
            upateUserCredentials({passwordConfirmation: e.target.value})
          }}
        />
        : null
      }

      <div style={submitStyle}>
        <RaisedButton
          label="Submit"
          primary={true}
          onTouchTap={fetchUserIfNeeded}
        />
      </div>
    </div>
  )
}

RegistrationForm.propTypes = {
  userCredentials: PropTypes.object.isRequired,
  fetchUserIfNeeded: PropTypes.func.isRequired,
  upateUserCredentials: PropTypes.func.isRequired,
  onSignInPage: PropTypes.bool.isRequired
}


export default RegistrationForm