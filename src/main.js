import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

const reactRoot = window.document.getElementById("root")

render(<Root/>, reactRoot);