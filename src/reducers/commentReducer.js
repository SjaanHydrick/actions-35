/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/postComments';

export const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      };
    default:
      return state;
  }
}
