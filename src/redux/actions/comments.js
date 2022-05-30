import axios from 'axios';

export const setCommentsLoaded = () => ({
  type: 'SET_COMMENTS_LOADED',
});

export const setPostComments = ({ data, id }) => ({
  type: 'SET_POST_COMMENTS',
  payload: { data, id },
});

export const addComment = item => async dispatch => {
  const { token } = JSON.parse(localStorage.getItem('profile'));
  try {
    const { data } = await axios.post('comments', item, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: 'ADD_COMMENT',
      payload: data,
    });

    return data;
  } catch (error) {
    alert(error);
  }
};

export const fetchPostComments = id => async dispatch => {
  try {
    await axios.get(`comments/post/${id}`).then(({ data }) => {
      dispatch(setPostComments({ data, id }));
    });
  } catch (error) {
    alert(error);
  }
};

export const removeComment = id => async dispatch => {
  const { token } = JSON.parse(localStorage.getItem('profile'));
  try {
    await axios.delete(`comments/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: 'REMOVE_COMMENT',
      payload: id,
    });
  } catch (error) {
    alert(error);
  }
};
