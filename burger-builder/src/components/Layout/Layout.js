// Component right below the root component 

/*
Aux: wrapped in a high-order Aux component
*/

import React from 'react';
import Aux from '../../hoc/Aux';


const layout = (props) => (
	<Aux>
		<div>Toolbar, Sidebar, Backdrop</div>
		<main>
			{props.children}
		</main> 
	</Aux>

);

export default layout;