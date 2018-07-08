// Main stateful component that will maintain the state of this application
// time to start using the state to render the ingredients dynamically

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
		totalPrice: 4,
		purchasable: false,
		purchasing: false  // for toggling the modal
	};

	
	// toggles the purchasable property of the state
	updatePurchaseState = (updatedIngredients) => {
		const igcopy = {
			...updatedIngredients
		};
		const sum = Object.keys(igcopy)
			.map(k => {
				return igcopy[k]
			})
			.reduce((sum, el) =>{
				return sum+el;
			}, 0);
		this.setState({purchasable: sum >0 }); // set it at true/false
	}

	purchaseHandler = () => {
		this.setState({purchasing:true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing:false});
	}


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
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0){
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = { 
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice });
		this.updatePurchaseState(updatedIngredients);
	}

	render(){
		let disabledInfo = {
			...this.state.ingredients
		}
 
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0 // result in true/false
		}
		console.log(disabledInfo);
		//salad: true, meat:false ....
		return (<Aux>
					<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
						<OrderSummary ingredients={this.state.ingredients} />
					</Modal>
					<Burger k={this.state.ingredients}/>
					<BuildControls 
						ingredientAdded = {this.addIngredientsHandler}
						ingredientRemoved = {this.removeIngredientsHandler}
						disabled = {disabledInfo}
						purchasable = {this.state.purchasable}
						price = {this.state.totalPrice}
						order = {this.purchaseHandler}
					/>
				</Aux>)
	}
}

export default BurgerBuilder;