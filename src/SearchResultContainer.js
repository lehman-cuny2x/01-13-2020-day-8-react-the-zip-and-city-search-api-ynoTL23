import React, { Component } from 'react'
import './css/SearchResultContainer.css'

export class Container extends Component {
    render() {
        return (
            <div id='container'></div>
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
