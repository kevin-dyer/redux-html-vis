import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { signOut } from '../actions'
import PasswordIcon from 'material-ui/svg-icons/action/fingerprint'
import FlatButton from 'material-ui/FlatButton'


const AuthLinkComponent = ({signedIn, onSignInPage, signOut, labelStyle, clickHandler, noIcon, label, primary}) => {
  const getLabel = () => {
    if (label) {
      return label
    } else if (!signedIn) {
      if (onSignInPage) {
        return 'Sign Up'
      } else {
        return 'Sign In'
      }
    } else {
      return 'Sign Out'
    }
  }

  const authNavigation = () => {
    if (!signedIn) {
      if (onSignInPage) {
        browserHistory.push('/user/signup')
      } else {
        browserHistory.push('/user/signin')
      }
    } else {
      signOut()
    }

    clickHandler()
  }

  return (
    <FlatButton 
      label={getLabel()}
      onTouchTap={authNavigation}
      icon={
        !noIcon ?
          <PasswordIcon />
          : null
      }
      labelStyle={labelStyle || {}}
      primary={primary} />
  )
}

AuthLinkComponent.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  onSignInPage: PropTypes.bool.isRequired,
  labelStyle: PropTypes.object,
  clickHandler: PropTypes.func,
  noIcon: PropTypes.bool,
  label: PropTypes.string
}

AuthLinkComponent.defaultProps = {
  clickHandler: () => {},
  primary: false
}

const mapStateToProps = (state, ownProps) => ({
  signedIn: !!state.user.data,
  onSignInPage: window.location.pathname === '/user/signin', //Trouble getting location from ownProps
  labelStyle: ownProps.labelStyle,
  clickHandler: ownProps.clickHandler,
  noIcon: ownProps.noIcon
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

const AuthLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLinkComponent)

export default AuthLink

