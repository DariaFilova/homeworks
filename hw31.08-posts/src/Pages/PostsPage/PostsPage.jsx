import React from 'react';
import Posts from '../../Components/Posts/Posts';
import './PostsPage.scss';

const PostsPage = () => {
  return (
    <div className='posts-page'>
      <div className='container'>
        <h2>Posts</h2>
        <Posts />
      </div>
    </div>
  );
};

export default PostsPage;

