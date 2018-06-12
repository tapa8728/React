// this type of component creation can be classified as "functional", "dumb", "presentational", "stateless"

// Adding dynamic content to the component
import React from 'react';

const Person = (props) => {
	return (
		<p> I am {props.name} and I am {props.age} years old. 
		 {props.children} </p>
	)
};

export default Person