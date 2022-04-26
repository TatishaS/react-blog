const initialState = {
  isAuth: false,
  isLoading: false,
  userData: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'USER_LOADED': {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        userData: action.payload,
      };
    }

    case 'LOGIN_SUCCESS': {
      localStorage.setItem('profile', JSON.stringify(action.payload));

      return {
        ...state,
        isAuth: true,
        isLoading: false,
        userData: action.payload,
      };
    }

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT_SUCCESS':
    case 'REGISTER_FAIL': {
      localStorage.removeItem('profile');
      return {
        ...state,

        userData: {},
        isAuth: false,
        isLoading: false,
      };
    }
    case 'SET_IS_AUTH': {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    default:
      return state;
  }
};

export default user;
