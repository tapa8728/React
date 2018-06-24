// this type of component creation can be classified as "functional", "dumb", "presentational", "stateless"

// Adding dynamic content to the component
import React from 'react';
//import Radium, {StyleRoot} from 'radium';

import classes from './Person.css'

const Person = (props) => {
		// if you want to throw and error deliberately. 
		// const rnd = Math.random();

		// if (rnd >0.7) {
		// 	throw new Error('Random hit error');
		// }

	return (
		<div className="Person" >
			<p onClick={props.click}> I am {props.name} and I am {props.age} years old. </p>
			<p> {props.children} </p>
			<input type="text" onChange={props.changed}  value={props.name}/>
		</div>
		
	)
};

export default Person; 