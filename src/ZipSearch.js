import React, { Component } from 'react';
import './css/ZipSearch.css'

export default class Zip extends Component {
    render() {
        return (
            <div className="instructions">
                <h1>Type a US zip code</h1>
                <input type="text" pattern="[0-9]{5}" title="Enter a 5-digit US zip code" placeholder="ex: 10046"/>
                <h1 id="search-button">Search</h1>
            </div>
        )
    }
}
