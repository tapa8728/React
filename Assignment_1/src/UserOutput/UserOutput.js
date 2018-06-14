import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p onClick={props.event}> This is a paragraph 1 from UserOutput :  {props.username}</p>
			<p> This is a paragraph 2 from UserOutput </p>
		</div>

	);
}

export default UserOutput