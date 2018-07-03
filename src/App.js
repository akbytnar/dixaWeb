import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import FourRects from './FourRects/FourRects';
import AllInOne from './AllInOne/AllInOne';
import Footer from './Footer/Footer';
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
        <AllInOne></AllInOne>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
