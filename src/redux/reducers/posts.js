const initialState = {
  items: [],
  userItems: [],
  isLoaded: false,
  postLoaded: false,
  postData: {},
  currentId: '',
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_POST_LOADED':
      return {
        ...state,
        postLoaded: action.payload,
      };
    case 'SET_POST_DATA':
      return {
        ...state,
        postData: action.payload,
        postLoaded: true,
      };
    case 'SAVE_CURRENT_ID':
      return {
        ...state,
        currentId: action.payload,
      };
    case 'UPDATE_POST': {
      const updatedPosts = state.items.items.map(post =>
        post._id === action.payload._id ? action.payload : post
      );

      return {
        ...state,
        items: { ...state, items: updatedPosts },
      };
    }

    case 'ADD_POST': {
      const updatedItems = [action.payload, ...state.items.items];

      return {
        ...state,
        items: { ...state, items: updatedItems },
      };
    }

    case 'REMOVE_POST': {
      const updatedItems = state.items.items.filter(post => {
        return post._id !== action.payload;
      });

      return {
        ...state,
        items: { ...state, items: updatedItems },
      };
    }

    default:
      return state;
  }
};

export default posts;
