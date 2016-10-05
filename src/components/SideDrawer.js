import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Subheader from 'material-ui/Subheader'
import HideDrawerIcon from 'material-ui/svg-icons/image/dehaze'
import AuthLink from '../containers/AuthLink'

const titleStyle = {
  fontWeight: 200,
  letterSpacing: 1
}
const labelStyle = {
  width: '100%'
}

const SideDrawer = ({ showDrawer, toggleDrawer }) => (
    <Drawer
      docked={false}
      open={showDrawer || false}
      onRequestChange={toggleDrawer}
    >
      <AppBar
        title="Settings"
        titleStyle={titleStyle}
        onLeftIconButtonTouchTap={toggleDrawer}
      />

      <ul className="drawer-content">
        <li className="drawer-item">
          <AuthLink
            clickHandler={toggleDrawer} 
            labelStyle={labelStyle} />
        </li>
      </ul>
    </Drawer>
)

SideDrawer.propTypes = {
  showDrawer: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default SideDrawer

