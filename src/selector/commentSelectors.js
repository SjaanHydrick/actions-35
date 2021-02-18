export const getComments = state => state.comments.comments;
export const countComments = state => getComments(state).length;
