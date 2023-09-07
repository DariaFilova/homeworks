import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './Posts.scss';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [Posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    }

    getPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='posts'>
      {Posts &&
        Posts.map((post) => (
          <div className='postOnPostsPage' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>View Post</Link>
          </div>
        ))}
    </div>
  );
};

export default Posts;

