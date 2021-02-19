/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments } from '../../selector/commentSelectors';
import Comment from './Comment';

const CommentList = () => {
  const paramId = useParams();
  const postId = paramId.id;
  const comments = useSelector(getComments).filter(comment => comment.postId === postId);

  const commentElements = comments.map(comment => (
    <div key={comment.id}>
      <Comment {...comment} />
    </div>
  ));

  return (
    <div>
      {commentElements}
    </div>
  );
};

export default CommentList;
