import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ui from './uiReducer'
import user from './userReducer'
import userCredentials from './userCredentialsReducer'
import DOMTree from './DOMTreeReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  userCredentials,
  ui,
  DOMTree
})

export default rootReducer
