import React from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import './css/Header.css'
import { changePage, resetPage } from './utils'

function Header() {
	return (
		<div>
			<h1 id="title" onClick={resetPage}>City & Zip Code Lookup</h1>
			<nav>
				<h1 className="button" id="city-button" onClick={changePage}>Search by City</h1>
				<h1 className="button" id="zip-button" onClick={changePage}>Search by Zip Code</h1>
			</nav>
		</div>
	)
}

function Header() {
	return (
		<div>
			<Link id='/'><h1 id='title'>City & Zip Code Lookup</h1></Link>
			<h1 id="title">City & Zip Code Lookup</h1>
			<nav>
				<Link to="/city-search" className='button' id='city-button'>Search by City</Link>
				<Link to="/zip-search" className='button' id='zip-button'>Search by Zip Code</Link>
			</nav>
			<Switch>
				<Route exact path='/' component={index} />
			</Switch>
		</div>
	)
}

export default Header
