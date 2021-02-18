import React from 'react';
import CommentList from './CommentList';
import CommentForm from '../form/CommentForm';

const CommentsPage = () => {
  return (
    <>
      <CommentForm />
      <CommentList />
    </>
  );
};

export default CommentsPage;
