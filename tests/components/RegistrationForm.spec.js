import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import RegistrationForm from '../../src/components/RegistrationForm'


function setup () {
  const props = {
    userCredentials: {},
    fetchUserIfNeeded: expect.createSpy(),
    upateUserCredentials: expect.createSpy(),
    onSignInPage: true
  }
  const enzymeWrapper = shallow(<RegistrationForm {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe('RegistrationForm Component', () => {
  it.skip('should call upateUserCredentials if length of text is greater than 0 in any input', () => {
    const { enzymeWrapper, props } = setup()
    const input = enzymeWrapper.find('input').get(0)
    
    input.simulate('change', {target: {value: 'David'}})
    expect(props.upateUserCredentials.calls.length).toBe(0)

    input.props().onSave('test@test.com')
    expect(props.upateUserCredentials.calls.length).toBe(1)
  })

  it.skip('should call fetchUserIfNeeded if submit button is clicked', () => {
    const { enzymeWrapper, props } = setup()
    const submitButton = enzymeWrapper.find('button')
    
    submitButton.simulate('click')
    expect(props.fetchUserIfNeeded.calls.length).toBe(1)
  })
})