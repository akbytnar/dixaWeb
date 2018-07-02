import React, { Component } from 'react';
import dixaLogo from '../Images/Icons/horizontal_logo_primary.png';
require ('./navbar.scss');

export default class Navbar extends React.Component {

  constructor() {
    super();

  }

  render() {

    let navItemsArray = ["Solutions", "Pricing", "Features", "Log in", "More"]
    console.log(navItemsArray)
    let navItems = navItemsArray.map((item, i) => {
      return <li key={i} className="navbar-item">{item}</li>
    })

    return(
      <nav className="navbar-main">
        <a className="navbar-home" href="#">
          <img src={dixaLogo} className="icon-big"/>
        </a>

        <ul className="navbar-items">
          {navItems}
          <li className="navbar-item"><button className="btn">Try for free</button></li>
        </ul>
      </nav>
    )
  }
}
