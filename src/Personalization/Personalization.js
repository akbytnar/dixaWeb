import React from 'react';
import personalizationIllustration from "../Images/Illustrations/product7.png";

export default class Personalization extends React.Component {

  render() {

    return(
      <section className="home personalization">
        <div className="left-wrapper wrapper-personalization">
        <div className="text">
          <p className="description">PERSONALIZATION</p>
          <h1>Get down and personal.</h1>
          <p className="description">Build long lasting relationships with your customers by having continuous and personal conversations. No more tickets, channels or forms.</p>
          <h3>Customer recognition</h3>
          <p className="description">Make your customers feel appreciated by instantly knowing who they are - their profile, journey and context.</p>

          <h3>Knowledge</h3>
          <p className="description">Connect each conversation to knowledge and data about past conversations, order history and preferences.</p>

          <h3>Seamless integration</h3>
          <p className="description">Truly understand your customer by pulling customer data into the Dixa interface directly from your other systems.</p>
          <a className="link" href="">Learn more about integrations</a>
        </div>
        </div>
        <div className="presence-right-wrapper right-wrapper">
          <img src={personalizationIllustration} id="personalizationImg" className="wrapped-img" alt="Personalization"/>
        </div>
      </section>
    )
  }
}
