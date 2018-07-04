import React, { Component } from 'react';
import rect1 from "../Images/Illustrations/product2.png";
import rect2 from "../Images/Illustrations/product3.png";
import rect3 from "../Images/Illustrations/product4.png";
import rect4 from "../Images/Illustrations/product5.png";

export default class FourRects extends React.Component {

  constructor() {
    super();

  }

  render() {

    let rectArray = [rect1, rect2, rect4, rect3]
    let rectItems = rectArray.map((rect, i) => {
      return <div className="rect-item"><img key={i} src={rect} className="rect-img"/></div>
    })

    return(
      <section className="four-rects">
        <div className="rect-container">
          {rectItems}
        </div>
      </section>
    )
  }
}
