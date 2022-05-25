import axios from 'axios';

export const userLoading = () => ({
  type: 'USER_LOADING',
});

export const userLoaded = data => ({
  type: 'USER_LOADED',
  payload: data,
});

export const setIsAuth = payload => ({
  type: 'SET_IS_AUTH',
  payload,
});

export const authError = () => ({
  type: 'AUTH_ERROR',
});

export const loginSuccess = data => ({
  type: 'LOGIN_SUCCESS',
  payload: data,
});

export const loginFail = () => ({
  type: 'LOGIN_FAIL',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const registerSuccess = () => ({
  type: 'REGISTER_SUCCESS',
});

export const registerFail = () => ({
  type: 'REGISTER_FAIL',
});

export const registerUser = newUser => async dispatch => {
  try {
    const resp = await axios.post('/auth/register', newUser);

    dispatch({
      type: 'REGISTER_SUCCESS',
    });
    alert('Вы зарегистрированы! Теперь вы можете войти в профиль');
  } catch (error) {
    alert(error);
    dispatch({
      type: 'REGISTER_FAIL',
    });
  }
};

export const loginUser = user => async dispatch => {
  try {
    const resp = await axios.post('/auth/login', user);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: resp.data,
    });
  } catch (error) {
    console.log(error);
    alert('Неверный логин или пароль');
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
};

export const fetchUser = id => async dispatch => {
  dispatch({
    type: 'USER_LOADING',
  });
  const { token } = JSON.parse(localStorage.getItem('profile')) || [];
  try {
    const resp = await axios.get(`/users/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    await dispatch({
      type: 'USER_LOADED',
      payload: resp.data,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const checkAuth = () => async dispatch => {
  dispatch({
    type: 'USER_LOADING',
  });
  const { token } = JSON.parse(localStorage.getItem('profile'));
  console.log(token);
  try {
    const resp = await axios.get('/auth/me', {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: 'USER_LOADED',
      payload: resp.data,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
