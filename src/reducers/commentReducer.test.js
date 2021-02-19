import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('add a comment with CREATE_COMMENT action', () => {
    const state = {
      comments: []
    };
      
    const action = createComment({
      body: 'asdf',
      id: 1,
      postId: 1
    });
      
    const newState = reducer(state, action);
      
    expect(newState).toEqual({
      comments: [{ body: 'asdf', id: 1, postId: 1 }]
    });

  });
});
