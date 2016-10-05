import { AUTH_ENDPOINT, SIGNOUT_ENDPOINT } from './auth/config'
import { browserHistory } from 'react-router'
import fetch from 'isomorphic-fetch'
import { xmlToJson } from './services/visService'

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_RESPONSE = 'USER_REGISTER_RESPONSE'
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR'
export const INVALIDATE_USER_TOKEN = 'INVALIDATE_USER_TOKEN'
export const UPDATE_USER_CREDENTIALS = 'UPDATE_USER_CREDENTIALS'
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST'
export const SIGN_OUT_RESPONSE = 'SIGN_OUT_RESPONSE'
export const UPDATE_DOM_TREE = 'UPDATE_DOM_TREE'
export const UPDATE_VIS_SORT_TYPE = 'UPDATE_VIS_SORT_TYPE'


export const toggleDrawer = (showDrawer) => ({
  type: TOGGLE_DRAWER,
  showDrawer: showDrawer
})

export const invalidateUserToken = () => ({
  type: INVALIDATE_USER_TOKEN
})

const requestUser = () => ({
  type: USER_REGISTER_REQUEST
})

const receiveUser = (data) => ({
  type: USER_REGISTER_RESPONSE,
  data,
  receivedAt: Date.now()
})

const fetchUser = () => (
  (dispatch, getState) => {
    const { userCredentials } = getState()

    dispatch(requestUser())

    return fetch(AUTH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveUser(json))

        //TODO: Having trouble redirecting to home via UserAuthWrapper or push action from redux router
        browserHistory.push('/')
      })
  }
)

const shouldFetchUser = ({ user }) => {
  if (!user.data) {
    return true
  } else if (user.isFetching) {
    return false
  } else {
    return user.didInvalidate
  }
}

export const fetchUserIfNeeded = () => (
  (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      return dispatch(fetchUser())
    } else {
      return Promise.resolve()
    }
  }
)

const signOutRequest = () => ({
  type: SIGN_OUT_REQUEST
})

const signOutResponse = (json) => ({
  type: SIGN_OUT_RESPONSE,
  json
})

export const signOut = () => (
  (dispatch) => {
    dispatch(signOutRequest())

    return fetch(SIGNOUT_ENDPOINT, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(signOutResponse(json)))
  }
)

export const upateUserCredentials = (credentials) => ({
  type: UPDATE_USER_CREDENTIALS,
  credentials
})

export const updateDOMTree = (data) => ({
  type: UPDATE_DOM_TREE,
  data
})

export const updateVisSortType = (sortType) => ({
  type: UPDATE_VIS_SORT_TYPE,
  sortType
})