// This is the burger that we are actually rendering to the screen

import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = (props) => (
	<div className="Burger">
		
		<BurgerIngredient type="BreadTop"></BurgerIngredient>
		<BurgerIngredient type="Cheese"></BurgerIngredient>
		<BurgerIngredient type="Meat"></BurgerIngredient>
		<BurgerIngredient type="Cheese"></BurgerIngredient>
		<BurgerIngredient type="BreadBottom"></BurgerIngredient>
	</div>
	);

export default Burger;