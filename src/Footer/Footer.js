import React, { Component } from 'react';
import logo from "../Images/Icons/D_mark_white.png";
import fb from "../Images/Icons/fb.png";

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
        <img src={logo} className="icon-small"/>
        <a href=""><img src={fb} className="icon-small" />Facebook</a>
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
