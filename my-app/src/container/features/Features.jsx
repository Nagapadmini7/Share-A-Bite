import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Who can donate?',
    text: 'Whether you\'re a restaurant owner with excess inventory or an individual passionate about making a positive impact, Share a Bite provides you with a platform to share the bounty and spread joy through every bite.',
  },
  {
    title: 'Motto',
    text: 'We understand that donating food is just one aspect of fighting hunger. That\'s why we work closely with local community organizations and food banks to ensure that the food reaches those who need it the most.',
  },
  {
    title: 'Message ',
    text: 'We believe in building strong partnerships to maximize our collective impact, so we actively collaborate with like-minded individuals, businesses, and charities to create a sustainable solution to food insecurity.',
  },
  {
    title: 'Let\'s make a difference',
    text: ' Join Share a Bite today and be part of a growing movement that is transforming lives, one bite at a time. Together, we can create a world where no one goes to bed hungry. Let\'s share a bite and make a difference in the lives of others.'

    
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;