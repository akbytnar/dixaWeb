import React, { Component } from 'react';
import presenceIllustration from "../Images/Illustrations/product1.png";

export default class Presence extends React.Component {

  constructor() {
    super();

  }

  render() {

    return(
      <section className="home presence">
        <div className="left-wrapper">
        <div className="text">
          <p className="description">PRESENCE</p>
          <h1>Be here, there and everywhere!</h1>
          <p className="description">Unify the customer service experience across email, chat & phone, and eliminate the chaos caused by having separate systems.</p>
          <h3>Phone</h3>
          <p className="description">Full-featured call center & phone system that runs directly in your browser without the need for clunky hardware.</p>
          <a className="link" href="">Learn more about phone</a>

          <h3>Chat</h3>
          <p className="description">Real-time live chat and messaging solution to engage with your visitors wherever they are.</p>
          <a className="link" href="">Learn more about chat</a>

          <h3>Email</h3>
          <p className="description">Email communication platform that lets you track, prioritize and help your customers.</p>
          <a className="link" href="">Learn more about email</a>
        </div>
        </div>
        <div className="presence-right-wrapper right-wrapper">
          <img src={presenceIllustration} className="wrapped-img"/>
        </div>
      </section>
    )
  }
}
