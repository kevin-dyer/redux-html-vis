import expect from 'expect'
import reducer from '../../src/reducers/uiReducer'
import { TOGGLE_DRAWER } from '../../src/actions'


describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      { showDrawer: false }
    )
  })

  it('should handle TOGGLE_DRAWER', () => {
    expect(
      reducer({}, {
        type: TOGGLE_DRAWER,
        showDrawer: true
      })
    ).toEqual(
      { showDrawer: true }
    )

    expect(
      reducer({
        showDrawer: true
      }, {
        type: TOGGLE_DRAWER
      })
    ).toEqual(
      { showDrawer: false }
    )
  })
})