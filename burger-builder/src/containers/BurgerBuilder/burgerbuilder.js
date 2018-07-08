// Main stateful component that will maintain the state of this application
// time to start using the state to render the ingredients dynamically

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	Salad:0.5,
	Bacon:0.4,
	Meat:1.3,
	Cheese:0.7
}


class BurgerBuilder extends Component{

	state = {
		ingredients:{
			Salad:0,
			Bacon:0,
			Meat:0,
			Cheese:0 
		},
		totalPrice: 4
	};

	addIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { 
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice });
	}

	removeIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount - 1;
		const updatedIngredients = { 
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice });
	}

	render(){
		return <Aux>
			<p> hello Burger Builder! </p>
			
			<Burger k={this.state.ingredients}/>
			<BuildControls 
				ingredientAdded = {this.addIngredientsHandler}
				ingredientRemoved = {this.removeIngredientsHandler}
				/>
		</Aux>
	}
}

export default BurgerBuilder;