import React from 'react';
import HobbieItem from '../HobbieItem/HobbieItem';
import './Hobbies.scss';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Reading',
      imgUrl:
        'https://images.emojiterra.com/google/android-12l/512px/1f4da.png',
    },
    {
      name: 'Knitting',
      imgUrl:
        'https://images.emojiterra.com/google/android-12l/512px/1f9f6.png',
    },
    {
      name: 'Watching movies',
      imgUrl:
        'https://images.emojiterra.com/google/android-12l/512px/1f3ac.png',
    },
    {
      name: 'Spending time with friends',
      imgUrl:
        'https://hotemoji.com/images/dl/p/peace-sign-emoji-by-twitter.png',
    },

    {
      name: 'Travelling',
      imgUrl: 'https://images.emojiterra.com/twitter/v13.1/512px/1f9f3.png',
    },
    {
      name: 'Playing boarding games',
      imgUrl:
        'https://i.pinimg.com/originals/d3/e4/13/d3e4136a5c1e95b635dd585f21558026.png',
    },
  ];
  return (
    <div
      className='hobbies'
      id='hobbies'
    >
      <div className='container'>
        <h2>My hobbies</h2>
        <div className='hobbies_wrapper'>
          {hobbies.map((hobbie) => (
            <HobbieItem
              name={hobbie.name}
              imgUrl={hobbie.imgUrl}
              description={hobbie.description}
              key={hobbie.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

