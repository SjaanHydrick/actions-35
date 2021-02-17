import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from '../../state/PostProvider';
import styles from './PostForm.css';

const PostForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setId(id + 1);
    
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
