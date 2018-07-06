// Main stateful component that will maintain the state of this application
// time to start using the state to render the ingredients dynamically

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

	state = {
		ingredients:{
			salad:1,
			bacon:1,
			meat:2,
			cheese:2 
		}
	};

	render(){
		return <Aux>
			<p> hello BurgerBuilder! </p>
			
			<Burger k={this.state.ingredients}/>
			<div> Build Controls </div>
		</Aux>
	}
}

export default BurgerBuilder;