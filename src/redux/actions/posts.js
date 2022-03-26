//import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPosts = () => dispatch => {
  dispatch(setLoaded(false));

  //axios.get('http://localhost:5656/posts').then(data => console.log(data));
};
