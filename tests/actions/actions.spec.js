import 'babel-polyfill'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as actions from '../../src/actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
let originalDateNow
let now

describe('synchronous actions', () => {
  it('should create an action to toggle side drawer', () => {
    const showDrawer = true
    const expectedAction = {
      type: actions.TOGGLE_DRAWER,
      showDrawer
    }
    expect(actions.toggleDrawer(showDrawer)).toEqual(expectedAction)
  })

  it('should update user credentials', () => {
    const credentials = {
      email: 'test@test.com',
      password: 'password'
    }
    const expectedAction = {
      type: actions.UPDATE_USER_CREDENTIALS,
      credentials
    }
    expect(actions.upateUserCredentials(credentials)).toEqual(expectedAction)
  })

  it('should update DOMTree for data visualization', () => {
    const data = {
      uniqueId: '123',
      hidden: false,
      name: 'BODY',
      children: []
    }
    const expectedAction = {
      type: actions.UPDATE_DOM_TREE,
      data
    }

    expect(actions.updateDOMTree())
  })

  it('should update Visualization sort type', () => {
    const sortType = 'area'
    const expectedAction = {
      type: actions.UPDATE_VIS_SORT_TYPE,
      sortType
    }
    expect(actions.updateVisSortType(sortType)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  beforeEach(() => {
    originalDateNow = Date.now
    now = Date.now()
    Date.now = () => now
  })

  afterEach(() => {
    Date.now = originalDateNow
    fetchMock.restore()
  })

  it.skip('creates USER_REGISTER_RESPONSE when fetching user has been done', () => {
    const responseBody = {
      "uid": 'test@test.com',
      token: 'abc123',
      "provider": "email",
      "email": 'test@test.com'
    }

    fetchMock.get('*', { body: responseBody})

    const expectedActions = [
      { type: actions.USER_REGISTER_REQUEST },
      { type: actions.USER_REGISTER_RESPONSE, data: responseBody, receivedAt: now }
    ]
    const store = mockStore({
      userCredentials: {
        email: 'test@test.com',
        password: 'password'
      },
      user: {
        isFetching: false,
        didInvalidate: false,
        data: null
      }
    })

    return store.dispatch(actions.fetchUserIfNeeded())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})