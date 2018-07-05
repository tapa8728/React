import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <Layout>
        <p> Test Component: but in actuality a page we actually want to display </p>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
