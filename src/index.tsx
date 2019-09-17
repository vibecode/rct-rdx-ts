import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducers } from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

const app = (
  <Provider store={store}>
    <App></App>
  </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))
