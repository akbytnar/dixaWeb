import React, { Component } from 'react';

export default class Try extends React.Component {

  constructor() {
    super();

  }

  render() {

    return(
      <section className="try container">
        <h1>Want to know more?</h1>
        <div className="buttons">
          <button className="btn btn-main btn-try">Try for free</button>
          <button className="btn btn-secondary btn-try">Book demo</button>
        </div>
      </section>
    )
  }
}
