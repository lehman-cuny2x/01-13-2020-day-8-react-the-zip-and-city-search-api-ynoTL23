import React from 'react'
import './Header.css'

function Header() {
	return (
		<div>
			<a href=""><h1 id="title">City & Zip Code Lookup</h1></a>
			<nav>
				<a href=''><h1 className="button">Search by City</h1></a>
				<a href=''><h1 className="button">Search by Zip Code</h1></a>
			</nav>
		</div>
	)
}

export default Header
