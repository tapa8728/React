import React from 'react';
//import './Modal.css';
import Aux from '../../../hoc/Aux';

const orderSummary =(props) => {
	const ingredient_summary = Object.keys(props.ingredients)
		.map(k =>{
			return <li key={k}>{k} : {props.ingredients[k]} </li>
		});
	return(
		<Aux>
			<h3>Your Order: </h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>
				{ingredient_summary}
			</ul>
			<p>Continue to checkout... </p>
		</Aux>
	);
}

export default orderSummary;