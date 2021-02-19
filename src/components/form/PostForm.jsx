import React, { useState } from 'react';
import { createPost, updatePostId } from '../../actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { getPostId } from '../../selector/postSelectors';
import styles from './Form.css';

const PostForm = () => {
  const dispatch = useDispatch();
  const postId = useSelector(getPostId);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  
  const handleSubmit = e => {
    e.preventDefault();
    
    const id = postId + 1;
    dispatch(updatePostId(id));
    dispatch(createPost({ id, title, body }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <span>Title: </span>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <span>Body: </span>
      <input
        type="body"
        placeholder="Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button className={styles.create}>Create Post</button>
    </form>
  );
};

export default PostForm;
