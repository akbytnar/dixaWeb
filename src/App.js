import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar></Navbar>

      </div>
    );
  }
}

export default App;
