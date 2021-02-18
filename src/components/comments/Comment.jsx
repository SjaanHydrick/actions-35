import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/postComments';

const Comment = ({ id, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(id));
  };

  return (
    <>
      <div>
        <p>{body}</p>
        <p>
          <button onClick={handleClick}> </button>
        </p>
      </div>
    </>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired
};

export default Comment;
