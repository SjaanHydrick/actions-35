/* eslint-disable max-len */
import { countPosts, getPosts } from './postSelectors';

describe('post selectors', () => {
  it('select the list of posts from state', () => {
    const state = {
      posts: [{ id: 1, title: 'blah', body: 'blahblahblah' }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{ id: 1, title: 'blah', body: 'blahblahblah' }]);
  });

  it('selects the number of posts', () => {
    const state = {
      posts: [{ id: 1, title: 'blah', body: 'blahblahblah' }, { id: 2, title: 'blahblah', body: 'blahblahblahblah' }]
    };

    expect(countPosts(state)).toEqual(2);
  });
});
