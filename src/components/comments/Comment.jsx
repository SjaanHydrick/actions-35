/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';
import styles from './Comment.css';

const Comment = ({ id, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={styles.comments}>
      <p>{body}</p>
      <p>
        <button className={styles.deletecomment} onClick={handleClick}>Delete</button>
      </p>
    </div>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired
};

export default Comment;
