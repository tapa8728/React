// this type of component creation can be classified as "functional", "dumb", "presentational", "stateless"

// Adding dynamic content to the component
import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';

import classes from './Person.css'

class Person extends Component{
	// adding all the lifecycle hooks
	constructor(props){
	    super(props); //you have to add super 
	    console.log("[Person.js] Inside Constructor ", props);
	}

	// gets executed after constructor. 
	componentWillMount(){
		console.log("[Person.js] Inside componentWillMount ");
	}

	// gets executed after render. 
	componentDidMount(){
		console.log("[Person.js] Inside componentDidMount ");
	}

	render() {
		console.log("[Person.js] Inside render ");
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