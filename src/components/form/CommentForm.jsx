import React, { useState } from 'react';
import { createComment, updateCommentId } from '../../actions/commentActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentId } from '../../selector/commentSelectors';
import styles from './Form.css';

const CommentForm = () => {
  const dispatch = useDispatch();
  const commentId = useSelector(getCommentId);
  const paramId = useParams();
  const postId = paramId.id;

  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const id = commentId + 1;
    
    dispatch(updateCommentId(id));
    dispatch(createComment({ id, postId, body }));
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
      <button className={styles.create}>Submit Comment</button>
    </form>
  );
};

export default CommentForm;
