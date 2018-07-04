import React, { Component } from 'react';
import homeIllustration from "../Images/Illustrations/art-hero.png";

export default class Home extends React.Component {

  constructor() {
    super();

  }

  render() {

    return(
      <section className="home">
        <div className="left-wrapper">
        <div className="text">
          <p className="description">CUSTOMER SERVICE SOFTWARE</p>
          <h1>Customer Chaos Solved</h1>
          <p className="description">Eliminate the chaos caused
          by using separate systems. Create
          one unified customer experience
          on email, chat & phone.</p>
          <div className="buttons">
          <button className="btn btn-main home-btn">Try for free</button>
          <button className="btn btn-secondary home-btn">Book demo</button>
          </div>
        </div>
        </div>
        <div className="right-wrapper">
          <img src={homeIllustration} id="home-illustration" className="wrapped-img"/>
        </div>
      </section>
    )
  }
}
