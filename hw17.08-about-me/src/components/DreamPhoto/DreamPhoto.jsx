import React from 'react';
import './DreamPhoto.scss';

const DreamPhoto = ({ photo, color }) => {
  const className = 'dreamPhoto ' + color;
  return (
    <div className={className}>
      <img
        src={photo}
        alt='cat'
      />
    </div>
  );
};

export default DreamPhoto;

