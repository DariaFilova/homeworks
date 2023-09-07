import React, { useEffect, useState } from 'react';
import './Post.scss';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = () => {
  const [post, setPost] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id} `
        );
        setPost(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
        navigate('/*');
      }
    }

    getPost();
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {post && (
        <div className='post'>
          <div className='post_wrapper'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          <div className='post_comments'>
            <Comments postId={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Post;

