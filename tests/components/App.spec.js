import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/containers/App'
import Home from '../../src/components/Home'


function setup () {
  const enzymeWrapper = shallow(<App children={<Home/>}/>)

  return enzymeWrapper
}

describe('App Component', () => {
  it('should render self and subcomponents', () => {
    const enzymeWrapper = setup()

    expect(enzymeWrapper.find('div').hasClass('app-container')).toBe(true)
    expect(enzymeWrapper.find('HeaderContainer')).toExist()
    expect(enzymeWrapper.find('SideDrawerContainer')).toExist()

    const muiThemeProviderProps = enzymeWrapper.find('MuiThemeProvider').props()
    expect(muiThemeProviderProps.multiTheme).toExist
  })
})