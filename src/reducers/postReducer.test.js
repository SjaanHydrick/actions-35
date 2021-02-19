import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a post with CREATE_POST action', () => {
    const state = {
      posts: []
    };

    const action = createPost({
      id: 1,
      title: 'blah',
      body: 'blahblahblah'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts:[{ id: 1, title: 'blah', body: 'blahblahblah' }]
    });
  });

  it('delete a post with DELETE_POST action', () => {
    const state = {
      posts: [{ id: 1, title: 'blah', body: 'blahblahblah' }],
      comments: []
    };

    const action = deletePost(1);

    expect(reducer(state, action)).toEqual({
      posts: [],
      comments: []
    });
  });
});
