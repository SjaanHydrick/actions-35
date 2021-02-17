import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from '../../state/PostProvider';

const PostForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setId(id + 1);
    dispatch(createPost({ id, title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        type="body"
        placeholder="Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create Post</button>
    </form>
  );
};

export default PostForm;
