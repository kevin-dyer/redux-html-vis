import React , { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
import AuthLink from '../containers/AuthLink'


const titleStyle = {
  fontWeight: 300
}
const rightLinkStyle = {
  marginTop: 13
}
const rightLinkLabelStyle = {
  color: '#FFFFFF'
}

const Header = ({ toggleDrawer }) => (
  <div className="header">
    <AppBar
      title="Kevin's app"
      titleStyle={titleStyle}
      onLeftIconButtonTouchTap={toggleDrawer}
      iconElementRight={
        <AuthLink
          labelStyle={rightLinkLabelStyle}
          noIcon={true}
        />
      }
      iconStyleRight={rightLinkStyle}
    />
  </div>
)

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
}

export default Header


