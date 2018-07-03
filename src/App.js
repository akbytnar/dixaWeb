import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import FourRects from './FourRects/FourRects';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Home></Home>
        </div>
        <FourRects></FourRects>
      </div>
    );
  }
}

export default App;
