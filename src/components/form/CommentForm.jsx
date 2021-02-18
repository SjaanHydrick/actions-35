import React, { useState } from 'react';
import { createComment } from '../../actions/postComments';
import { useDispatch } from 'react-redux';

const CommentForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState(1);
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setId(id + 1);

    dispatch(createComment({ id, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Comment:</span>
      <input
        type="text"
        placeholder="Comment"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Submit Comment</button>
    </form>
  );
};

export default CommentForm;
