import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import './Comments.scss';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments `
        );
        console.log(response.data, 'comments');

        setComments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    getComments();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='comments'>
      <h2>Comments</h2>
      <div className='comments_wrapper'>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

