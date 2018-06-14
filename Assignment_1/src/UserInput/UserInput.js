import React from 'react';

const UserInput = (props) => {
	return(
		<div>
			<input style={props.style} type="text" onChange={props.changed} value={props.orig}/>
		</div>
	)
}

export default UserInput