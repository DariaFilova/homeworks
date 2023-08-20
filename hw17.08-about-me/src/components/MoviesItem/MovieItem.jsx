import React from 'react';
import './MovieItem.scss';

const MovieItem = ({ title, description, poster, children }) => {
  return (
    <div className='movieItem'>
      <h6 style={{ color: '#613DC1', paddingBottom: '5px' }}>{children}</h6>
      <div className='movieItem_img'>
        <img
          src={poster}
          alt=''
        />
      </div>
      <div className='movieItem_info'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieItem;

