import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPosts = () => dispatch => {
  dispatch(setLoaded(false));
  axios
    .get('http://localhost:5656/posts')
    .then(({ data }) => console.log(data.items));
};

export const setPosts = items => ({
  type: 'SET_POSTS',
  payload: items,
});

export const addPost = payload => ({
  type: 'ADD_POST',
  payload,
});
