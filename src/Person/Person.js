// this type of component creation can be classified as "functional", "dumb", "presentational", "stateless"

// Adding dynamic content to the component
import React from 'react';

const Person = () => {
	return (
		<p> I am a person and I am {Math.floor(Math.random() * 30)} years old. </p>
	);
}

export default Person