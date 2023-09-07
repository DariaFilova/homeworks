import React from 'react';
import './PostPage.scss';
import Post from '../../Components/Post/Post';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const navigate = useNavigate();
  return (
    <div className='post-page'>
      <div className='container'>
        <button onClick={() => navigate(-1)}>Go back</button>
        <Post />
      </div>
    </div>
  );
};

export default PostPage;

