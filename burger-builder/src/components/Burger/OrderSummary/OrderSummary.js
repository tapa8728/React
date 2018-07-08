import React from 'react';
//import './Modal.css';
import Aux from '../../../hoc/Aux';

const orderSummary =(props) => {
	const ingredient_summary = Object.keys(props.ingredients)
		.map(k =>{
			return <li><span>{k}</span> : {props.ingredients[k]} </li>
		});
	return(
		<Aux>
			<h3>Your Order: </h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>

			</ul>

		</Aux>
	);
}

export default orderSummary;