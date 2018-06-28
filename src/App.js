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

using CSS modules allows us to load the CSS file as a javsxript object and hence access all the classes as properties our javascript file.
*/
// to implement component lifecycle methods, you need access to a stateful (class .. that maintains state var) component. 

// Lifecycle Hooks order of call - Constructor, componentWillMount, render, componentDidMount

// Lifecycle Hooks for updating a component - updates can be triggered by the parent or by the internal state change. 
/* Updation by parent: 
   the parent updates the props because of which, if you link the state to the props the component will re-render
*/

// PureComponent :  this class of components already has a check built in to re-render the component on updation only and only if any of the props have changed. 
// this way you dont need to write checks for each and every key in the props manually

import React, { PureComponent } from 'react';
//import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends PureComponent {
  // adding the constructor - which gets called by defualt
  constructor(props){
    super(props); //you have to add super 
    console.log("[App.js] Inside Constructor ", props);
    // you can initialize the state in here if you want to. 
    //this.state = ....

  }

  // gets executed after constructor. 
  componentWillMount(){
    console.log("[App.js] Inside componentWillMount ");
  }

  // gets executed after render. 
  componentDidMount(){
    console.log("[App.js] Inside componentDidMount ");
  }

  // no need to write this function if you are inheriting PureComponent
  // no need for componentWillRecieveProps() here because this is internal state change triggered updated
  /*

  shouldComponentUpdate(nextProps, nextState){
    console.log("[UPDATE App.js] Inside shouldComponentUpdate ", nextProps, nextState);
    //return true; //true;
    // we can check which props changed and only render the component if a prop changed. 
    // if we simply return true .. then "show persons" button will re-render the components agagin and again and you will see all the lifecylce methods.
    return nextProps.persons !== this.props.persons ||
          nextProps.changed !== this.props.changed ||
          nextProps.clicked !== this.props.clicked;
          
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log("[UPDATE App.js] Inside componentWillUpdate ", nextProps, nextState);
  }

  componentDidUpdate(){
    console.log("[UPDATE App.js] Inside componentDidUpdate ");

  }


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
    person.name = event.target.value; // event.target.value; --> to get the value the user entered.

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
  // gets called after ComponentWillMount
  render() {
    console.log("[App.js] Inside Render");

    // inline button styling
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    //let classes = ['red', 'bold'].join(' ');
    // no need to push strings, we can directly access the css classes from the "classes" js object
    const assignedClasses = [];
    if (this.state.persons.length <=2){
         assignedClasses.push(classes.red);   //classes.push("red");
    }
    if (this.state.persons.length <=1){ 
      assignedClasses.push(classes.bold);   //classes.push("bold");
    }

    let persons = null;   // persons will hold the jsx code that needs to be rendered. 
    if (this.state.toShow) {
      persons = (
          <div>
            <Persons  // super component
                persons={this.state.persons}  // passing the persons array
                clicked={this.deletePersonHandler} 
                changed={this.nameChangeHandler} />
          </div> 
        );
      buttonStyle.backgroundColor = 'red';
      
    }

    
    // instead of <div className="App"> .. since we used css modules, we can refer the css class as a property.
    // the css module loader allocates a special class name to each of these css classes using - css class name, js file importing the class and a hash. this gets stored in the properties of the "classes" js object (which is essentially the css file)
    return (
          <div className = "App">
              <button onClick ={() => {this.setState({toShow: true})}}> Show Persons </button>
              <Cockpit 
                title = {this.props.title}
                ac = {assignedClasses}
                btnStyle = {buttonStyle}
                clicked = {this.toggleNamesHandler} />
              {persons}
          </div>
    );

    //return React.createElement('div', {className:"App"}, React.createElement('h1', null,'I am react app'));
  }
}

export default App;

