import React from 'react'
import { Component } from 'react'
import './css/SearchResultContainer.css'

export class Container extends Component {
    render() {
        return (
            <div id='container'></div>
        )
    }
}

export class CityContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: '',
            location: '',
            population: 0,
            total_wages: 0
        }
    }

    render() {
        return (
			<div className='city-container'>
				<div className='title-bar'>
					<p className='city-name'>My City</p>
				</div>
				<div className='stats'>
					<div className='descriptions'>
						<ul>
							<li><b>State:</b> {this.state.state}</li>
							<li><b>Location:</b> {this.state.location}</li>
							<li><b>Population:</b> {this.state.population}</li>
							<li><b>Total Wages:</b> {this.state.total_wages}</li>
						</ul>
					</div>
				</div>
			</div>
		)
    }
}

export class ErrorContainer extends Component {
    render() {
        return (
			<div id='error'>
				<h1>{this.props.error}</h1>
			</div>
		)
    }
}
