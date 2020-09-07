import React from 'react';
import './coordenates.style.css';

export const Coordenates = (props) => (
          // This format allowed me to access the nested object in the iss object.
          // I was trying to access the possition like this: this.state.popsition.latitude/longitude
          // I was getting an error: Cannot read property 'latitude/longitude' of undefined
          <fragment>
          	<div className="coordenates">
          		<h1> { "ISS Coordenates" } </h1>
          		<img className="center" alt="iss" src={`https://pbs.twimg.com/profile_images/1067887841122803712/zakQ4EB-_400x400.jpg`}/>
	          	<h3> {"Latitude: " + ((props.iss || {}).iss_position || {}).latitude}</h3>
	           	<h3> {"Longitude: " + ((props.iss || {}).iss_position || {}).longitude}</h3>
	        </div>
          </fragment>
	)