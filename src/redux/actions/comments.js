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
    const { data } = await axios.post('http://localhost:5656/comments', item, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
    dispatch({
      type: 'ADD_COMMENT',
      payload: data,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostComments = id => async dispatch => {
  try {
    await axios
      .get(`http://localhost:5656/comments/post/${id}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(setPostComments({ data, id }));
      });
  } catch (error) {
    console.log(error);
  }
};
