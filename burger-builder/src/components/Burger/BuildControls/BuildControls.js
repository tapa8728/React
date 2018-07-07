import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls =[
	{ label: 'Salad', type: 'Salad'},
	{ label: 'Bacon', type: 'Bacon'},
	{ label: 'Cheese', type: 'Cheese'},
	{ label: 'Meat', type: 'Meat'}
];


// functional component
const buildControls = (props) => (
	<div className="BuildControls">
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				added={props.ingredientAdded}
				removed={props.ingredientRemoved}
			/>

	))}

	</div>

);

export default buildControls;
