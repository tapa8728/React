// this is the isolated component for the Persons Array 

import React, {Component} from 'react';
import Person from '../Person/Person'

class Persons extends Component {
	render(){

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