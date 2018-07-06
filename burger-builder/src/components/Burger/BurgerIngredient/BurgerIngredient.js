// represents a specific burger ingredient

import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngredient extends Component {

	render(){
		/* There will be some logic inolved here because there are different types
		of ingredients that need different css. We will expect an ingredient name
		coming in at props.type */

		let ingredient = null;

		// based on the ingredient recieved in props.type, appropriate case (hence css)
		// will be rendered. 
		switch(this.props.type) {
			case('BreadBottom'):
				ingredient = <div className={BreadBottom}></div>;
				break;
			case('BreadTop'):
				ingredient = (
					<div className={BreadTop}>
						<div className={Seeds1}></div>
						<div className={Seeds2}></div>
					</div>
				);
				break;
			case('Meat'):
				ingredient = <div className={Meat}></div>;
				break;
			case('Cheese'):
				ingredient = <div className={Cheese}></div>;
				break;
			case('Salad'):
				ingredient = <div className={Salad}></div>;
				break;
			case('Bacon'):
				ingredient = <div className={Bacon}></div>;
				break;
			default: ingredient = null;

		}
		return ingredient;

	}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default BurgerIngredient;