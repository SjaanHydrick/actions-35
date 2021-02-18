import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../selector/commentSelectors';
import Comment from './Comment';

const CommentList = () => {
  const comments = useSelector(getComments);

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
