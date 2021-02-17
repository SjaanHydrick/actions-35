import React from 'react';
import { useSelector } from '../../state/PostProvider';
import { getPosts } from '../../selector/postSelectors';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);

  const postElements = posts.map(post => (
    <div key={post.id}>
      <Post {...post} />
    </div>
  ));

  return (
    <div>
      {postElements}
    </div>
  );
};

export default PostList;
