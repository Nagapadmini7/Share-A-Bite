import React from 'react';
import possibilityImage from '../../assests/possibility.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Experience the joy of giving and the fulfillment of making a difference. Share a Bite and be a part of something truly extraordinary. Together, let's build a future where no plate is empty and no heart is left untouched.</p>
     
    </div>
  </div>
);

export default Possibility;