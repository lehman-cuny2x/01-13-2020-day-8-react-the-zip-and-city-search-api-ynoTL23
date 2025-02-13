import React from 'react'
import ReactDOM from 'react-dom'
import { Container, ErrorContainer } from './SearchResultContainer'
import CityContainer from './CityContainer'
const apiURL = 'http://ctp-zip-api.herokuapp.com/'

// method: the method of search (cityname or zip code)
// ex:
// callAPI('city')
// callAPI('zip')
export const callAPI = method => {
	switch (method) {
		case 'city':
			searchByCity()
				.then(data => {
					ReactDOM.render(<Container />, document.getElementById('content'))
					ReactDOM.render(<CityContainer />, document.getElementById('container'))
				})
				.catch(err => {
					console.log(err)
				})
				break
				case 'zip':
					searchByZip()
					.then(data => {
						ReactDOM.render(<Container />, document.getElementById('content')) // render container to hold each city container
						// render each city's container and information
						const cities = data.map(city => (
							<CityContainer
								city={city['LocationText']}
								state={city['State']}
								location={`${city['Lat']}, ${city['Long']}`}
								population={city['EstimatedPopulation']}
								total_wages={city['TotalWages']}
							/>
						))
						// render the cities
						ReactDOM.render(cities, document.getElementById('container'))
				})
				.catch(err => {
					console.log(err)
				})
			break
		default:
			console.log('Something went wrong.')
			break
	}
}

export const searchByCity = async () => {
	// get the city name and format to all caps
	const query = document.querySelector('input').value.toUpperCase()
	if (query === '') {
		// user didn't type anything
		ReactDOM.render(<ErrorContainer error='Error: Your input was empty. Please type something' />, document.getElementById('content'))
		throw new Error('User input was empty.')
	} else {
		// fetch data from api
		const response = await fetch(apiURL + `city/${query}`)
		if (response.status === 200) {
			const data = await response.json()
			return data
		} else {
			// something wrong happened
			ReactDOM.render(<ErrorContainer error='Error: City not found or invalid spelling/format' />, document.getElementById('content'))
			throw new Error('City not found or invalid spelling/format.')
		}
	}
}

export const searchByZip = async () => {
	// get the zip code
	const query = document.querySelector('input').value
	if (query === '') {
		// user didn't type anything
		ReactDOM.render(<ErrorContainer error='Error: Your input was empty. Please type something' />, document.getElementById('content'))
		throw new Error('User input was empty.')
	} else {
		// fetch data from api
		const response = await fetch(apiURL + `zip/${query}`)
		if (response.status === 200) {
			const data = await response.json()
			return data
		} else {
			// something wrong happened
			ReactDOM.render(<ErrorContainer error='Error: ZIP code not found or invalid format' />, document.getElementById('content'))
			throw new Error('ZIP code not found or invalid format.')
		}
	}
}
