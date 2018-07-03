import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import FourRects from './FourRects/FourRects';
import AllInOne from './AllInOne/AllInOne';
import Footer from './Footer/Footer';
import Presence from './Presence/Presence';
import Priority from './Priority/Priority';
import Personalization from './Personalization/Personalization';
import Try from './Try/Try';
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
        <div className="container">
          <Presence></Presence>
          <Priority></Priority>
          <Personalization></Personalization>
        </div>
        <Try></Try>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
