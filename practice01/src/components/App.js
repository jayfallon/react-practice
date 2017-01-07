import React, { Component } from 'react';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
        	<Header tagline="Hello Jay" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
