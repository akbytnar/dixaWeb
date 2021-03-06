import React from 'react';
import homeIllustration from "../Images/Illustrations/art-hero_copy.png";

export default class Home extends React.Component {

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
          <button className="btn btn-main home-btn hvr-bob">Try for free</button>
          <button className="btn btn-secondary home-btn hvr-bob">Book demo</button>
          </div>
        </div>
        </div>
        <div className="home-right-wrapper right-wrapper">
          <img src={homeIllustration} id="home-illustration" className="wrapped-img" alt="Home illustration"/>
        </div>
      </section>
    )
  }
}
