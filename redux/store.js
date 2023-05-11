// /redux/store.js

import { createStore } from 'redux';

const initialState = {
    username: null,
    posts: {}
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload,
            };

        case 'DELETE_USERNAME':
            console.log("here");
            return {
                ...state,
                username: null
            };

        case 'CREATE_POST':
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            };

        case 'UPDATE_POST':
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: {
                        ...action.payload
                    }
                }
            };
        case 'DELETE_POST':
            const { [action.payload]: deletedPost, ...restOfPosts } = state.posts;
            return {
                ...state,
                posts: restOfPosts,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;