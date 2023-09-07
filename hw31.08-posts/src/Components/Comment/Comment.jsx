import React from 'react';
import './Comment.scss';

const Comment = ({ comment }) => {
  return (
    <>
      <div className='comment'>
        <div>
          <h3>{comment.name}</h3>
          <p>from {comment.email}</p>
        </div>
        <div>{comment.body}</div>
      </div>
    </>
  );
};

export default Comment;

