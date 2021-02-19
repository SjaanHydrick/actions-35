import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from '../form/CommentForm';
import styles from './Comment.css';

const CommentsPage = () => {
  return (
    <>
      <Link to="/" className={styles.homebutton}>Back to Home</Link>
      <CommentForm />
      <h3>Comments: </h3>
      <CommentList />
    </>
  );
};

export default CommentsPage;
