import React from 'react';
import './HobbieItem.scss';

const HobbieItem = (props) => {
  const { name, imgUrl } = props;
  return (
    <div className='hobbieItem'>
      <h3>{name}</h3>
      <div className='hobbieItem_img'>
        <img
          src={imgUrl}
          alt=''
        />
      </div>
    </div>
  );
};

export default HobbieItem;

