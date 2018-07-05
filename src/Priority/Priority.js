import React, { Component } from 'react';
import priorityIllustration from "../Images/Illustrations/product6.png";

export default class Priority extends React.Component {

  constructor() {
    super();

  }

  render() {

    return(
      <section className="home priority">
      <div className="priority-left-wrapper left-wrapper">
        <img src={priorityIllustration} className="wrapped-img"/>
      </div>
        <div className="priority-right-wrapper right-wrapper">
        <div className="text">
          <p className="description">PRIORITY</p>
          <h1>Prioritize intelligently.</h1>
          <p className="description">Help your most important customers first by blending agents and prioritizing conversations across all channels.</p>
          <h3>Skills-based routing</h3>
          <p className="description">Always match customers with the agent most qualified to meet their needs.</p>

          <h3>Flow builders</h3>
          <p className="description">Build powerful and smart routing flows in minutes without assistance from your IT department.</p>

          <h3>Offer algorithms</h3>
          <p className="description">Let the most qualified agents handle the most important conversations before the rest. Automatically.</p>
        </div>
        </div>
      </section>
    )
  }
}
