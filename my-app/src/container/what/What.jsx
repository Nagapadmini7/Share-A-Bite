import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const What = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Who are we?" text="Share a Bite is a dedicated platform that brings together food lovers, local communities, and those in need, all with the shared mission of combating hunger. Our platform connects individuals, restaurants, and organizations, providing a simple and efficient way to donate surplus food and make a positive impact on people's lives." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Aim" text="At Share a Bite, we believe that everyone deserves access to nutritious meals. With a few clicks, you can be part of our movement and contribute to reducing food waste while helping those who are experiencing food insecurity. " />
      <Feature title="Platform" text="Our user-friendly platform allows you to easily post available food items and connect with nearby recipients who can benefit from your donations."/>
      <Feature title="Join Us" text="By joining Share a Bite, you become a Hunger Hero, a vital link in our network of compassion. Together, we can make a significant difference by fostering a culture of sharing and caring for one another. " />
    </div>
  </div>
);

export default What;