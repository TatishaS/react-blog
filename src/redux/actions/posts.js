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
    const resp = await axios.patch(
      `http://localhost:5656/posts/${id}`,
      updatedItem,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
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
    const { data } = await axios.post('http://localhost:5656/posts', item, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: 'ADD_POST',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removePost = id => async dispatch => {
  const { token } = JSON.parse(localStorage.getItem('profile'));
  try {
    await axios.delete(`http://localhost:5656/posts/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: 'REMOVE_POST',
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = id => async dispatch => {
  dispatch(setPostLoaded(false));

  try {
    await axios.get(`http://localhost:5656/posts/${id}`).then(({ data }) => {
      dispatch(setPostData(data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = () => async dispatch => {
  dispatch(setLoaded(false));
  await axios.get('http://localhost:5656/posts').then(({ data }) => {
    dispatch(setPosts(data));
  });
};
