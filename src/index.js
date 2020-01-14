import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Header from './Header'
import { resetPage } from './utils'
import './css/index.css'

ReactDOM.render(<Header />, document.getElementById('header'))
resetPage()

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
