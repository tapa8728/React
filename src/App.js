// when this file is imported in  main file index.js (main because thats whats linked to index.html), 
// only the "export" entities will be imported. In this case, only the component App will be exported

// this file can be saved as .js or .jsx  

// the embedded html code is compiled to .jsx

// hence we dont prefer the createElement as it get cumbersome when we add more children elements. 
// the embedded HTML is actually JS.  

// the component shown below is a class-based components (also referred to as "containers", "smart" or "stateful" components

// By callin <Person> component again and again, we are basically re-using it.

// whats so special about the "state"  -- tf the value in state changes, it will cause react to re-render the DOM.. or update the DOM

 /*
  Whilst props allow you to pass data down the component tree (and hence trigger an UI update), 
  state is used to change the component, well, state from within. Changes to state also trigger an UI update.
*/

// onClick is just one type of event. For more event types - https://reactjs.org/docs/events.html#supported-events

// make a component call a function by passing a function as a property for it. here we are passing switchEventHandler
// as a prop with name "click" for person component. 

// Everything in the render() function will will be excecuted

// Dynamically changing styles .. module 5

/* RADIUM - package

Radium is jut wrapping a component around another component and injecting features - styles. 
Radium also helps in parsing Media queries - 
A media query is when you want to modify the look/feel of the app based on the devices
general type - screen res, viewport, print vs screen


*/

import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // 'id' stands for the key property while rendering a react component
  state = {
    persons: [
      { id: "n1", name: 'Tanvi', age: 28 },
      { id: "n2", name: 'Reema', age: 22 },
      { id: "n3", name: 'Rina', age: 30 }
    ], 
    someState: 'other state info', 
    toShow: false
  }

  // bind will pass the argument list 
  switchEventHandler = (newName1, newName2) => {
      //console.log("Button was clicked");
      // this.state.persons[0].name = "tipsy"; .. dont do this. there wont be a DOM re-render
      this.setState({
        persons: [
          { name: newName1, age: 28},
          { name: newName2, age: 22 },
          { name: 'Rina', age: 45 }
        ],
        someState: 'other state info', 
        toShow: false
      });
  }

  // change something on live input. OnChange event handler.
  // dynamic updation of the DOM.
  nameChangeHandler = (event, id) => {
    // personIndex will hold the index of the particular person object that needs its name changed
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    // getting the person object .. with spread as we dont directly want to point to the state/ 
    const person = {... this.state.persons[personIndex]};
    // const person2 = Object.assign({}, this.state.persons[personIndex]); // another way to create a copy and not directly modify
    person.name = event.target.value;

    // updating state. Not directly of course. 
    const stateCpy = [... this.state.persons];
    stateCpy[personIndex] = person

    this.setState({ persons: stateCpy });
  }


  toggleNamesHandler = () => {
    const doesShow = this.state.toShow;
    this.setState({toShow: !doesShow});
  }


  // Since we are directly modifying the state, a lot could go wrong.
  // so instead we can slice or spread the values in a list and then delete them. 
  // always update the state in an immutable fashion. create a copy, modify it and then update the state. 
  // dont perfrom the operation directly on the state. 
  deletePersonHandler = (prsn_index) => {
    //const persons_copy = this.state.persons.slice();  
    const persons_copy = [...this.state.persons]; // spread operator.
    persons_copy.splice(prsn_index, 1); // delete that index from the state
    this.setState({persons: persons_copy}); //update the state
  }

  // Render only throws out JSX. All function, state, variables should be defined before the render. 
  render() {
    // inline button styling
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <=2){
      classes.push("red");
    }
    if (this.state.persons.length <=1){
      classes.push("bold");
    }

    let persons = null;   // persons will hold the jsx code that needs to be rendered. 
    if (this.state.toShow) {
      persons = (
          <div>
            { // direct JSX .. looping over state which contains values.. outputing HTML/JSX
                this.state.persons.map((prsn, index) => {
                  return <Person 
                    click={this.deletePersonHandler.bind(this, index)}
                    name={prsn.name} 
                    age={prsn.age} 
                    key={prsn.id}
                    changed={(event) => this.nameChangeHandler(event, prsn.id)} />
                })
            }
          </div> 
        );
      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
         backgroundColor: 'pink',
         color: 'black'
      }
    }

    

    return (
      <div className="App">
        <h1> I am react app </h1>
        <p className={classes.join(' ')}> this is really working</p>
        <button 
          style={buttonStyle}
          onClick={this.toggleNamesHandler}>
         Toggle Name </button>
         {persons}
        
      </div>
    );

    //return React.createElement('div', {className:"App"}, React.createElement('h1', null,'I am react app'));
  }
}

export default Radium(App);
