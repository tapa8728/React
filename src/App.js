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



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tanvi', age: 28 },
      { name: 'Reema', age: 22 },
      { name: 'Rina', age: 30 }
    ]
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
        ]
      });
  }

  // change something on live input. OnChange event handler.
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Reema', age: 22 },
        { name: 'Rina', age: 30 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> I am react app </h1>
        <p> this is really working</p>
        <button onClick={this.switchEventHandler.bind(this, 'Tipsy', 'Pie')}> Switch Name </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          changed={this.nameChangeHandler}/>
 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchEventHandler.bind(this, 'Tipsy !!', 'Nator')}
          > My sister </Person>
        
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
           />
      </div>
    );

    //return React.createElement('div', {className:"App"}, React.createElement('h1', null,'I am react app'));
  }
}

export default App;
