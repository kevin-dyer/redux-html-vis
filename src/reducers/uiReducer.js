import { TOGGLE_DRAWER } from '../actions'


export default function ui (state={
  showDrawer: false
}, { type, showDrawer }) {
  switch (type) {
    case TOGGLE_DRAWER:
      return { 
        ...state,
        showDrawer: typeof showDrawer === 'boolean' ? showDrawer : !state.showDrawer
      }
    default:
      return state
  }
}