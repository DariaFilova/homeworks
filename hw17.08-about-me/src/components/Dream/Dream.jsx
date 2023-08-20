import React, { useState } from 'react';
import catPhoto1 from '../../assets/img/cat-photo1.JPG';
import catPhoto2 from '../../assets/img/cat-photo2.JPG';
import catPhoto3 from '../../assets/img/cat-photo3.JPG';

import './Dream.scss';
import DreamPhoto from '../DreamPhoto/DreamPhoto';

const Dream = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const photos = [
    { photo: catPhoto1, color: 'yellow' },
    { photo: catPhoto2, color: 'blue' },
    { photo: catPhoto3, color: 'green' },
  ];
  return (
    <div
      className='dream'
      id='dream'
    >
      <div className='container'>
        <h2>My dream</h2>
        <div className='dream_wrapper'>
          <div className='dream_text'>
            <p>
              For 10 years I wanted to have a cat. I am obsessed with cats. I
              have a cat living with my parents in my hometown and I miss him
              very much. I couldn't have a cat in my previous apartment bacause
              it was too small. Finally I moved to a bigger one and just a
              couple weeks ago I got a cat. His name is Marcel. He is a cutie
              and apparently he doesn't want me to sleep. Ever. But I love him
              anyway. Wanna see his photos? Just click the button below.
            </p>
          </div>
          <div className='dream_button'>
            <button
              className='dream_button'
              onClick={handleClick}
            >
              Click me
            </button>
          </div>
          <div className={isShown ? 'dream_photos' : 'hidden'}>
            {photos.map((photo) => (
              <DreamPhoto
                photo={photo.photo}
                color={photo.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;

