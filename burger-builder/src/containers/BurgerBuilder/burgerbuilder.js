// Main stateful component that will maintain the state of this application

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
	render(){
		return <Aux>
			<p> hello BurgerBuilder! </p>
			
			<Burger/>
			<div> Build Controls </div>
		</Aux>
	}
}

export default BurgerBuilder;