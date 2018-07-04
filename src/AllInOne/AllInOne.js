import React, { Component } from 'react';
import img1 from "../Images/Illustrations/art-smooth_setup.png";
import img2 from "../Images/Illustrations/art-inteligent_routing.png";
import img3 from "../Images/Illustrations/art-global_something.png";

export default class AllInOne extends React.Component {

  constructor() {
    super();

  }

  render() {

    let elements = [
      {title : "All in one", description: "Call Center, Contact Center and Help Desk in one." , img : img1},
      {title : "Advanced routing", description: "Automated and intelligent distribution of conversations to agents." , img : img2},
      {title : "Engagingly personal", description: "Have continuous conversations with people at the center." , img : img3}
    ]

    let mapItems = elements.map((elem, i) => {
      return (
        <div key={i} className="item">
        <img src={elem.img} className="img-small"/>
        <h3>{elem.title}</h3>
        <p className="description">{elem.description}</p>
        <a href="" className="link">Learn more</a>
        </div>
      )
    })

    return(
      <section className="allInOne">
        <div className="container">
          <div className="allInOne-items">
            {mapItems}
          </div>
        </div>
      </section>
    )
  }
}
