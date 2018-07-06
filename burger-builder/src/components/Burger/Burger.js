// This is the burger that we are actually rendering to the screen
// in the props of the burgerbuilder we pass the ingridients


import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = (props) => {
	const transformedIngredients = Object.keys( props.k )
	.map( igKey => {
			return [...Array( props.k[igKey] )].map( (_,i)=>{
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
	});
	console.log("transformedIngredients : "+transformedIngredients);
	return(
		<div className="Burger">	
			<BurgerIngredient type="BreadTop"></BurgerIngredient>
			{transformedIngredients}
			<BurgerIngredient type="BreadBottom"></BurgerIngredient>
		</div>
		);
}

export default Burger;