import React, { Component } from 'react';
import logo from "../Images/Icons/D_mark_white.png";

export default class Footer extends React.Component {

  constructor() {
    super();

  }

  render() {

    return(
      <footer className="footer">
      <div className="container">
      <div className="footer-items">
      <div className="footer-item">
        <img src={logo} className="icon-big"/>
      </div>
      <div className="footer-item">

      </div>
      <div className="footer-item">

      </div>
      </div>
      </div>
      </footer>
    )
  }
}
