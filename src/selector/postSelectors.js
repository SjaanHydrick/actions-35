export const getPosts = state => state.dogs;
export const countPosts = state => getPosts(state).length;
