// Main stateful component that will maintain the state of this application

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component{
	render(){
		return <Aux>
			<p> hello BurgerBuilder! </p>
			<div> Burger Graphical representation </div>
			<div> Build Controls </div>
		</Aux>
	}
}

export default BurgerBuilder;