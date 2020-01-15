import React from 'react'
import './css/CityContainer.css'

export default function CityContainer(props) {
	return (
		<div className='city-container'>
			<div className='title-bar'>
				<p className='city-name'>{props.city}</p>
			</div>
			<div className='stats'>
				<div className='descriptions'>
					<ul>
						<li><b>State:</b> {props.state}</li>
						<li><b>Location (Lat, Long):</b> {props.location}</li>
						<li><b>Population:</b> {props.population}</li>
						<li><b>Total Wages:</b> {props.total_wages}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
