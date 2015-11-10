/**
 * Created by youngmoon on 11/9/15.
 */

import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import './components/index.scss'
import App from './containers/AsyncApp'
import RootReducer from './reducers'

const initialState = window.__INITIAL_STATE__

const store = configureStore(initialState)


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)