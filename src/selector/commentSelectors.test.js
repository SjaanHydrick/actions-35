import { getComments } from './commentSelectors';

describe('comments selectors', () => {
  it('select the list of comments from state', () => {
    const state = {
      comments: { comments: [{ body: 'stuff', id: 1, postId: 1 }] }
    };

    const comments = getComments(state);
    expect(comments).toEqual([{ body: 'stuff', id: 1, postId: 1 }]);
  });
});
