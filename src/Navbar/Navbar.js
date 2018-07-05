import React from 'react';
import dixaLogo from '../Images/Icons/horizontal_logo_primary.png';
import arrowDown from "../Images/Icons/angle-down.svg";

export default class Navbar extends React.Component {

  render() {

    let navItemsArray = ["SOLUTIONS", "PRICING", "FEATURES", "LOG IN", "MORE"]
    console.log(navItemsArray)
    let navItems = navItemsArray.map((item, i) => {
      if (item === "SOLUTIONS" || item==="MORE") {
        return (
        <li key={i} className="navbar-item"><a href="" className="navbar-link navbar-link-with-arrow">
        {item}<img src={arrowDown} className="icon-tiny icon-link" alt="Icon down"/></a>
        </li>)
      }
      else {
        return <li key={i} className="navbar-item"><a href="" className="navbar-link">{item}</a></li>
      }

    })

    return(
      <nav className="navbar-main">
        <a className="navbar-home" href="">
          <img src={dixaLogo} className="icon-big" alt="Dixa Logo"/>
        </a>

        <ul className="navbar-items">
          {navItems}
          <li className="navbar-item"><button className="btn btn-main">Try for free</button></li>
        </ul>
      </nav>
    )
  }
}
