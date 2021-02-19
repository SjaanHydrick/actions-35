/* eslint-disable max-len */
import { getPosts } from './postSelectors';

describe('post selectors', () => {
  it('select the list of posts from state', () => {
    const state = {
      posts: { posts: [{ id: 1, title: 'blah', body: 'blahblahblah' }] }
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{ id: 1, title: 'blah', body: 'blahblahblah' }]);
  });
});
