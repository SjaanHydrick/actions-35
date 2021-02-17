import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/PostProvider';
import { deletePost } from '../../actions/postActions';

const Post = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <div>
        <p>{id}</p>
        <p>Title:</p>
        <p>{title}</p>
        <p>Body:</p>
        <p>{body}</p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
