// this type of component creation can be classified as "functional", "dumb", "presentational", "stateless"

// Adding dynamic content to the component
import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';

import classes from './Person.css'

class Person extends Component{

	render() {
		return (
			<div className="Person" >
				<p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old. </p>
				<p> {this.props.children} </p>
				<input type="text" onChange={this.props.changed}  value={this.props.name}/>
			</div>
		)
	}
} // end of class


export default Person; 