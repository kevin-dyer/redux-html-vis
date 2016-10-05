import { UPDATE_DOM_TREE, UPDATE_VIS_SORT_TYPE } from '../actions'


export default function DOMTree (state={
  data: {},
  sortType: 'children'
}, { type, data, sortType }) {
  switch (type) {
    case UPDATE_DOM_TREE:
      const newState = {
        ...state,
        data
      }
      return newState
    case UPDATE_VIS_SORT_TYPE:
      return {
        ...state,
        sortType
      }
    default:
      return state
  }
}