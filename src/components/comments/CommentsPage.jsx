import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from '../form/CommentForm';

const CommentsPage = () => {
  return (
    <>
      <Link to="/">Back to Home</Link>
      <CommentForm />
      <CommentList />
    </>
  );
};

export default CommentsPage;
