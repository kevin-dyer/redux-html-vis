import expect from 'expect'
import reducer from '../../src/reducers/userReducer'
import {
  INVALIDATE_USER_TOKEN,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESPONSE
} from '../../src/actions'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        isFetching: false,
        didInvalidate: false,
        data: null
      }
    )
  })

  it('should handle INVALIDATE_USER_TOKEN', () => {
    expect(
      reducer({
        isFetching: false,
        didInvalidate: false,
        data: {
          token: 'abc123'
        }
      }, {
        type: INVALIDATE_USER_TOKEN
      })
    ).toEqual(
      {
        isFetching: false,
        didInvalidate: true,
        data: {
          token: 'abc123'
        }
      }
    )
  })

  it('should handle USER_REGISTER_REQUEST', () => {
    expect(
      reducer({
        isFetching: false,
        didInvalidate: true,
        data: null
      }, {
        type: USER_REGISTER_REQUEST
      })
    ).toEqual(
      {
        isFetching: true,
        didInvalidate: false,
        data: null
      }
    )
  })

  it('should handle USER_REGISTER_RESPONSE', () => {
    const now = Date.now()
    expect(
      reducer({
        isFetching: true,
        didInvalidate: false,
        data: null
      }, {
        type: USER_REGISTER_RESPONSE,
        data: {
          uid: "test@test.com",
          token: 'abc123',
          provider: "email",
          email: "test@test.com"
        },
        receivedAt: now
      })
    ).toEqual(
      {
        isFetching: false,
        didInvalidate: false,
        data: {
          uid: "test@test.com",
          token: 'abc123',
          provider: "email",
          email: "test@test.com"
        },
        lastUpdated: now
      }
    )
  })
})