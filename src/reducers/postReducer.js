/* eslint-disable max-len */
import { CREATE_POST, DELETE_POST, UPDATE_POST_ID } from '../actions/postActions';

export const initialState = {
  posts: [],
  comments: [],
  postId: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        comments: state.comments.filter(comment => comment.postId !== action.payload)
      };
    case UPDATE_POST_ID:
      return {
        ...state,
        postId: action.payload
      };
    default:
      return state;
  }
}
