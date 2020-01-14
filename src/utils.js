import React from 'react'
import ReactDOM from 'react-dom'
import City from './City'
import Zip from './Zip'

export const changePage = e => {
	const button = e.target
	if (button.id === 'city-button') {
		document.getElementById('zip-button').classList.remove('current')
		button.classList.add('current')
		return ReactDOM.render(<City />, document.getElementById('content'))
	} else {
		document.getElementById('city-button').classList.remove('current')
		button.classList.add('current')
		return ReactDOM.render(<Zip />, document.getElementById('content'))
	}
}

export const resetPage = () => {
	const heading = (
		<div className='instructions'>
			<h1>Select your search method above</h1>
		</div>
	)

	document.getElementById('city-button').classList.remove('current')
	document.getElementById('zip-button').classList.remove('current')
	ReactDOM.render(heading, document.getElementById('content'))
}
