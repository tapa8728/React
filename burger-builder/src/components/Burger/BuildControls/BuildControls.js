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
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				added= {()=>props.ingredientAdded(ctrl.type)}
				removed={()=>props.ingredientRemoved(ctrl.type)}
				disabled={props.disabled[ctrl.type]}    />
		))}
		<button className="OrderButton">ORDER NOW</button>
	</div>

);

export default buildControls;
