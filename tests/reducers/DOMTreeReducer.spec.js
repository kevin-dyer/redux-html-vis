import expect from 'expect'
import reducer from '../../src/reducers/DOMTreeReducer'
import { UPDATE_DOM_TREE, UPDATE_VIS_SORT_TYPE } from '../../src/actions'


describe('DOMTree reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      data: {},
      sortType: 'children'
    })
  })

  it('should handle UPDATE_DOM_TREE', () => {
    const data = {
      uniqueId: 'acb123',
      name: 'BODY',
      hidden: false,
      children: []
    }

    expect(
      reducer(undefined, {
        type: UPDATE_DOM_TREE,
        data 
      })
    ).toEqual(
      {
        data,
        sortType: 'children'
      }
    )
  })

  it('should handle UPDATE_VIS_SORT_TYPE', () => {
    const sortType = 'area'

    expect(
      reducer(undefined, {
        type: UPDATE_VIS_SORT_TYPE,
        sortType: 'area'
      })
    ).toEqual(
      {
        data: {},
        sortType: 'area'
      }
    )
  })
})