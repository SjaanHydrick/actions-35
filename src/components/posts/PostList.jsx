import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selector/postSelectors';
import Post from './Post';
import styles from './Post.css';

const PostList = () => {
  const posts = useSelector(getPosts);

  const postElements = posts.map(post => (
    <div key={post.id}>
      <Post {...post} />
    </div>
  ));

  return (
    <div>
      <div className={styles.post}>
        <h3>Delete:</h3>
        <h3>Id:</h3>
        <h3>Title:</h3>
        <h3>Body:</h3>
      </div>
      {postElements}
    </div>
  );
};

export default PostList;
