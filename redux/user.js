// /store/user.js

export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const removeUsername = () => ({
  type: 'DELETE_USERNAME',
  payload: null
});


export const createPost = (post) => ({
  type: 'CREATE_POST',
  payload: post
});

export const deletePost = (postId) => ({
  type: 'DELETE_POST',
  payload: postId
})

export const updatePost = (post) => ({
  type: 'UPDATE_POST',
  payload: post
})