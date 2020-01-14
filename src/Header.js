import React from 'react'
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

export default Header
