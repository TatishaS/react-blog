import axios from 'axios';

export const setPosts = items => ({
  type: 'SET_POSTS',
  payload: items,
});

export const setPostData = item => ({
  type: 'SET_POST_DATA',
  payload: item,
});

export const saveCurrentId = id => ({
  type: 'SAVE_CURRENT_ID',
  payload: id,
});

export const updatePost = (id, updatedItem) => async dispatch => {
  const { token } = JSON.parse(localStorage.getItem('profile'));

  try {
    const resp = await axios.patch(`/posts/${id}`, updatedItem, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    alert(error);
  }
};

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const setPostLoaded = payload => ({
  type: 'SET_POST_LOADED',
  payload,
});

export const addPost = item => async dispatch => {
  const { token } = JSON.parse(localStorage.getItem('profile'));
  try {
    const { data } = await axios.post('/posts', item, {
      headers: {
        Authorization: token,
      },
    });

    await dispatch({
      type: 'ADD_POST',
      payload: data,
    });

    await dispatch(fetchPost(data._id));
  } catch (error) {
    alert(error);
  }
};

export const removePost = id => async dispatch => {
  const { token } = JSON.parse(localStorage.getItem('profile'));
  try {
    await axios.delete(`/posts/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: 'REMOVE_POST',
      payload: id,
    });
  } catch (error) {
    alert(error);
  }
};

export const fetchPost = id => async dispatch => {
  dispatch(setPostLoaded(false));

  try {
    await axios.get(`/posts/${id}`).then(({ data }) => {
      dispatch(setPostData(data));
    });
  } catch (error) {
    alert(error);
  }
};

export const fetchPosts = page => async dispatch => {
  dispatch(setLoaded(false));
  await axios.get(`/posts?page=${page}`).then(({ data }) => {
    dispatch(setPosts(data));
  });
};
