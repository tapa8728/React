// Component right below the root component 

/*
Aux: wrapped in a high-order Aux component
Lets add some css margin between the main-area and toolbar.
*/

import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css'; 

const layout = (props) => (
	<Aux>
		<div>Toolbar, Sidebar, Backdrop</div>
		<main className="Content">
			{props.children}
		</main> 
	</Aux>

);

export default layout;