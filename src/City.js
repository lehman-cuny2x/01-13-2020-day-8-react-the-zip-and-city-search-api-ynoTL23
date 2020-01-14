import React, { Component } from 'react';
import './css/index.css'
import './css/City.css'

export default class City extends Component {
    render() {
        return (
            <div className="instructions">
                <h1>Type a US city name</h1>
                <input type="text" title="Enter a US city name" placeholder="ex: Los Angeles"/>
				<h1 id="search-button">Search</h1>
            </div>
        )
    }
}
