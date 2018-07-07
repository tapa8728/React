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
		}
	};

	addIngredientsHandler = (type) => {

	}

	removeIngredientsHandler = (type) => {
		
	}

	render(){
		return <Aux>
			<p> hello BurgerB uilder! </p>
			
			<Burger k={this.state.ingredients}/>
			<BuildControls />
		</Aux>
	}
}

export default BurgerBuilder;