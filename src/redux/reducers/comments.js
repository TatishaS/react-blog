const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const comments = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMMENTS':
        return {
          ...state,
          items: action.payload,
          isLoaded: true,
        };
      default:
        return state;
    }
  };
  
  export default comments;