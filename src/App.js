import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Authorize from './authorizeCall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Confirmation Of Payee OIDC</h1>
        <Authorize/>
      </div>
      
    );
  }
}

export default App;
