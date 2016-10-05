import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { PropTypes } from 'react'
import HeaderContainer from './HeaderContainer'
import SideDrawerContainer from './SideDrawerContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Needed for onTouchTap, a faster alternative for onClick in mobile
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="app-container" >
      <HeaderContainer/>
      <SideDrawerContainer/>
      {children}
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App