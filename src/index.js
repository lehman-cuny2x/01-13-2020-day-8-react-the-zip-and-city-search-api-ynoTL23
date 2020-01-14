import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import CitySearch from './CitySearch'
import ZipSearch from './ZipSearch'
import PageNotFound from './PageNotFound'
import * as serviceWorker from './serviceWorker'
import './css/index.css'

const navigation = (
	<Router>
		<div id='header'>
			<header>
				<Link to='/'>
					<h1 id='title'>City & ZIP Code Lookup</h1>
				</Link>
				<nav>
					<Link to='/city-search' className='button' id='city-button'>
						Search by City
					</Link>
					<Link to='/zip-search' className='button' id='zip-button'>
						Search by ZIP Code
					</Link>
				</nav>
			</header>
		</div>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/city-search' component={CitySearch} />
			<Route path='/zip-search' component={ZipSearch} />
			<Route component={PageNotFound} />
		</Switch>
	</Router>
)

ReactDOM.render(navigation, document.getElementById('root'))

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
