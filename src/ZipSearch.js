import React, { Component } from 'react';
import './css/ZipSearch.css'
let eventHandler = require('./utils.js')

export default class Zip extends Component {
    render() {
        return (
            <div className="instructions">
                <h1>Type a US ZIP code</h1>
                <input type="text" pattern="[0-9]{5}" title="Enter a 5-digit US zip code" placeholder="ex: 10046"/>
                <h1 id="search-button" onClick={() => eventHandler.callAPI('zip')}>Search</h1>
            </div>
        )
    }
}
