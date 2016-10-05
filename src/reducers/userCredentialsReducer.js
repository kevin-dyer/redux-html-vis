import { UPDATE_USER_CREDENTIALS } from '../actions'


export default function userCredentials (state={}, { type, credentials }) {
  switch (type) {
    case UPDATE_USER_CREDENTIALS:
      return {
        ...state,
        ...credentials
      }
    default:
      return state
  }
}