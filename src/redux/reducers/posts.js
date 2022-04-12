const initialState = {
  items: [],
  isLoaded: false,
  postLoaded: false,
  postData: {},
};


const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true
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
        postLoaded: true

      };
    case 'ADD_POST': {
      const updatedItems = [ action.payload, ...state.items.items];
      return {
        ...state,
        items: {...state, items: updatedItems}
    };
    }
      
    case 'REMOVE_POST': {
      console.log(state);

      const updatedItems = state.items.items.filter(post => {
        return post._id !== action.payload;
      });

      return {
        ...state,
        items: {...state, items: updatedItems}
      }
  
    }
  
     
    default:
      return state;
  }
};

export default posts;
