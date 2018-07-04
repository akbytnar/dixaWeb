import React, { Component } from 'react';
import dixaLogo from '../Images/Icons/horizontal_logo_primary.png';

export default class Navbar extends React.Component {

  constructor() {
    super();

  }

  render() {

    let navItemsArray = ["SOLUTIONS", "PRICING", "FEATURES", "LOG IN", "MORE"]
    console.log(navItemsArray)
    let navItems = navItemsArray.map((item, i) => {
      return <li key={i} className="navbar-item"><a href="" className="navbar-link">{item}</a></li>
    })

    return(
      <nav className="navbar-main">
        <a className="navbar-home" href="#">
          <img src={dixaLogo} className="icon-big"/>
        </a>

        <ul className="navbar-items">
          {navItems}
          <li className="navbar-item"><button className="btn btn-main">Try for free</button></li>
        </ul>
      </nav>
    )
  }
}
