import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { Link } from 'react-router-dom';
import styles from './Post.css';

const Post = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <div className={styles.post}>
        <p className={styles.buttonp}>
          <button className={styles.delete} onClick={handleClick}> </button></p>
        <p>{id}</p>
        <p>{title}</p>
        <Link to={`/id=${id}/comments`} >
          <p>{body}</p>
        </Link>
      </div>
    </>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
