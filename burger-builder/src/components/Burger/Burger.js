// This is the burger that we are actually rendering to the screen
// in the props of the burgerbuilder we pass the ingridients


import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BuildControls from './BuildControls/BuildControls';

const Burger = (props) => {
	let transformedIngredients = Object.keys( props.k )
	.map( igKey => {
			return [...Array( props.k[igKey] )].map( (_,i)=>{
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
	})
	.reduce((arr, el)=>{
		return arr.concat(el)
	}, []);

	// check if burger ingredients have been chosen or not
	if (transformedIngredients.length === 0){
		transformedIngredients = <p> Please choose some ingredients! </p>
	}
	else{
		console.log("here~");
	}

	return(
		<div className="Burger">	
			<BurgerIngredient type="BreadTop"></BurgerIngredient>
			{transformedIngredients}
			<BurgerIngredient type="BreadBottom"></BurgerIngredient>
		</div>
		);
}

export default Burger;