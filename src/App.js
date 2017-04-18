import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Assessment</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <List count="10" ></List>
      </div>
    );
  }
}

export default App;
