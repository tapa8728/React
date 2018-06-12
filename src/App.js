// when this file is imported in  main file index.js (main because thats whats linked to index.html), 
// only the "export" entities will be imported. In this case, only the component App will be exported

// this file can be saved as .js or .jsx  

// the embedded html code is compiled to .jsx

// hence we dont prefer the createElement as it get cumbersome when we add more children elements. 
// the embedded HTML is actually JS.  

// the component shown below is a class-based components (also referred to as "containers", "smart" or "stateful" components

// By callin <Person> component again and again, we are basically re-using it. 

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> I am react app </h1>
        <p> this is really working</p>
        <Person name="Tanvi" age="27" />
        <Person name="Reema" age="22"> My sister </Person>
        <Person name="Rina" age="25" />

      </div>
    );

    //return React.createElement('div', {className:"App"}, React.createElement('h1', null,'I am react app'));
  }
}

export default App;
