import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

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
          <button onClick={handleClick}>Delete</button>
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
