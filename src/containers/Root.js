import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../store/createStore'
import Routes from '../routes'
import '../styles/core.scss'

const store = createStore()

const Root = () => (
  <Provider store={store}>
    <div className='root-container'>
      <Routes store={store} />
    </div>
  </Provider>
)

export default Root
