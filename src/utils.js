const apiURL = 'http://ctp-zip-api.herokuapp.com/'

// method: the method of search (cityname or zip code)
// ex:
// callAPI('city')
// callAPI('zip')
export const callAPI = (method) => {
	switch (method) {
		case 'city':
			searchByCity().then((data) => {
				console.log(data)
			}).catch((err) => {
				console.log(err)
			})
			break;
		case 'zip':
			searchByZip().then((data) => {
				console.log(data)
			}).catch((err) => {
				console.log(err)
			})
			break;
		default:
			console.log('Something went wrong.')
			break;
	}
}

export const searchByCity = async () => {
	// get the city name and format to all caps
	const query = document.querySelector('input').value.toUpperCase()
	if(query === '') { // user didn't type anything
		throw new Error('User input was empty.')
	} else {
		// fetch data from api
		const response = await fetch(apiURL + `city/${query}`)
		if(response.status === 200) {
			const data = await response.json()
			return data
		} else {
			// something wrong happened
			throw new Error('City not found or invalid spelling/format.')
		}
	}
}

export const searchByZip = async () => {
	// get the zip code
	const query = document.querySelector('input').value
	if(query === '') { // user didn't type anything
		throw new Error('User input was empty.')
	} else {
		// fetch data from api
		const response = await fetch(apiURL + `zip/${query}`)
		if(response.status === 200) {
			const data = await response.json()
			return data
		} else {
			// something wrong happened
			throw new Error('ZIP code not found or invalid format.')
		}
	}
}
