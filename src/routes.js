import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import App from './containers/App'
import UserRegistrationContainer from './containers/UserRegistrationContainer'
import Home from './components/Home'


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  failureRedirectPath: '/user/signin'
})

const Routes = ({ store }) => {
  const history = syncHistoryWithStore(browserHistory, store)

  return (
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={UserIsAuthenticated(Home)} />
        <Route path="user/signup" component={UserRegistrationContainer} />
        <Route path="user/signin" component={UserRegistrationContainer} />
      </Route>
    </Router>
  )
}

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes