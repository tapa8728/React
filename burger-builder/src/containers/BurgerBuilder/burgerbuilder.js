// Main stateful component that will maintain the state of this application
// time to start using the state to render the ingredients dynamically

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

	state = {
		ingredients:{
			Salad:0,
			Bacon:0,
			Meat:0,
			Cheese:0 
		}
	};

	render(){
		return <Aux>
			<p> hello BurgerBuilder! </p>
			
			<Burger k={this.state.ingredients}/>
			<BuildControls />
		</Aux>
	}
}

export default BurgerBuilder;