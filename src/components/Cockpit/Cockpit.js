import React from 'react';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

	return (
		<Aux>
			<h1>{props.title}</h1>
			<h2> I am react app </h2>
			<p className={props.ac.join(' ')}> this is really working</p>
			<button 
				style={props.btnStyle}
				onClick={props.clicked}>
				Toggle Name </button>
		</Aux>
	);

};

export default cockpit;