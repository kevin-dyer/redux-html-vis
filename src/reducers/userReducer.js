import { 
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_ERROR,
  INVALIDATE_USER_TOKEN,
  SIGN_OUT_REQUEST,
  SIGN_OUT_RESPONSE
} from '../actions'


export default function user (state = {
  isFetching: false,
  didInvalidate: false,
  data: null
}, { type, data, receivedAt }) {
  switch (type) {
    case INVALIDATE_USER_TOKEN:
      return {
        ...state,
        didInvalidate: true
      }
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case USER_REGISTER_RESPONSE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        data,
        lastUpdated: receivedAt
      }
    case USER_REGISTER_ERROR:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      }
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case SIGN_OUT_RESPONSE:
      return {
        ...state,
        data: null,
        isFetching: false,
        didInvalidate: false
      }
    default:
      return state
  }
}