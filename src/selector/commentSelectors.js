export const getComments = state => state.comments;
export const countComments = state => getComments(state).length;
