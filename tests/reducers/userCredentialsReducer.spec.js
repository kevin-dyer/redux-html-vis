import expect from 'expect'
import reducer from '../../src/reducers/userCredentialsReducer'
import { UPDATE_USER_CREDENTIALS } from '../../src/actions'


describe('userCredentials reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle UPDATE_USER_CREDENTIALS', () => {
    expect(
      reducer({}, {
        type: UPDATE_USER_CREDENTIALS,
        credentials: {
          email: 'test@test.com',
          password: 'password'
        }
      })
    ).toEqual(
      {
        email: 'test@test.com',
        password: 'password'
      }
    )
  })
})