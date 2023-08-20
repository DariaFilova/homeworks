import './About.scss';
import photo from '../../assets/img/photo.JPG';

import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='about_photo'>
          <img
            src={photo}
            alt=''
          />
        </div>
        <div className='about_info'>
          <h1>Hi! I am Daria Filova</h1>
          <p>
            I am 25 years old. I am from Ukraine, from small town called
            Antratsit but I moved to Kyiv and lived there for 9 years. Now I
            live in Germany in Frankfurt am Main. You can find more information
            about me in the sections below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

