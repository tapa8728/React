// this is the isolated component for the Persons Array 

import React, {PureComponent} from 'react';
import Person from '../Person/Person'

class Persons extends PureComponent {
	// adding all the lifecycle hooks
	constructor(props){
	    super(props); //you have to add super 
	    console.log("[Persons.js] Inside Constructor ", props);
	}

	  // gets executed after constructor. 
	componentWillMount(){
		console.log("[Persons.js] Inside componentWillMount ");
	}

	// gets executed after render. 
	componentDidMount(){
		console.log("[Persons.js] Inside componentDidMount ");
	}

	//Update: Parent Triggered -- 1st Method
	componentWillReceiveProps(nextProps) {
		console.log("[UPDATE Persons.js] Inside componentWillReceiveProps ");
	}

	// if this function returns True --> the state will update and the component will re-render
	// but if this return false --> state will not update and component wont render
	// if false -- none of the eventhandlers that are looking to change the state of the component will work. 
	/*

	  shouldComponentUpdate(nextProps, nextState){
		console.log("[UPDATE Persons.js] Inside shouldComponentUpdate ", nextProps, nextState);
		return true; //true;
	}*/

	componentWillUpdate(nextProps, nextState){
		console.log("[UPDATE Persons.js] Inside componentWillUpdate ", nextProps, nextState);
	}

	componentDidUpdate(){
		console.log("[UPDATE Persons.js] Inside componentDidUpdate ");

	}

	render(){
		console.log("[Persons.js] Inside render() ");
		return this.props.persons.map((prsn, index) => { 
			return  <Person 
	          click={this.props.clicked.bind(this, index)}
	          name={prsn.name} 
	          age={prsn.age}
	          key={prsn.id} 
	          changed={(event) => this.props.changed(event, prsn.id)} />
	       });
	}
}
export default Persons;

 // We wrote the persons in a separate component so that the return block in app.js is as lean as possible

 // in app.js when we call this component, we have to make sure to pass the 3 props - persons array, clicked: delete handler, changed: onchangehandler

 /*
stateless/functional component:

const persons = (props) => props.persons.map((prsn, index) => { 
		return  <Person 
          click={props.clicked.bind(this, index)}
          name={prsn.name} 
          age={prsn.age}
          key={prsn.id} 
          changed={(event) => props.changed(event, prsn.id)} />
         });

 export default persons;
 */