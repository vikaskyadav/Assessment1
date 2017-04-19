import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './list.js';
import List from 'react-virtualized/dist/commonjs/List'

class App extends Component {
  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        <p className="App-intro">
         Assessment #1 
        </p>
        <List/>
        <Lists count="10" ></Lists>
         

         <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            Assessment by Vikas
            <a className="grey-text text-lighten-4 right" href="#!">Github Link </a>
            </div>
          </div>
        </footer>
            
      </div>
    );
  }
}

export default App;
