import React from 'react';

const UserOutput = (props) => {
	return (
		<div>
			<p> This is a paragraph 1 from UserOutput {props.username}</p>
			<p> This is a paragraph 2 from UserOutput </p>
		</div>

	);
}

export default UserOutput