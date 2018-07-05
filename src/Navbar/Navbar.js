import React from 'react';
import dixaLogo from '../Images/Icons/horizontal_logo_primary.png';
import arrowDown from "../Images/Icons/angle-down.svg";
import hamburger from "../Images/Icons/menu.png"

export default class Navbar extends React.Component {

  render() {

    let navItemsArray = ["SOLUTIONS", "PRICING", "FEATURES", "LOG IN", "MORE"]
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
          <div className="navbar-text-items">{navItems}</div>
          <img src={hamburger} className="icon-super-small" id="hamburger"/>
          <li className="navbar-item"><button className="btn btn-main hvr-bob">Try for free</button></li>
        </ul>
      </nav>
    )
  }
}
