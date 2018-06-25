import React from 'react';

const cockpit = (props) => {

	return (
		<div>
			<h1> I am react app </h1>
			<p className={props.ac.join(' ')}> this is really working</p>
			<button 
				style={props.btnStyle}
				onClick={props.clicked}>
				Toggle Name </button>
		</div>
	);

};

export default cockpit;