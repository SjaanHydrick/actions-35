import React from 'react';
import PostList from './PostList';
import PostForm from '../form/PostForm';

const PostsPage = () => {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
};

export default PostsPage;
