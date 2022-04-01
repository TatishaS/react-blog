const initialState = {
  items: [],
  isLoaded: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'ADD_POST':
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};

export default posts;
