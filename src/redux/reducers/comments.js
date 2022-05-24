const initialState = {
  comments: [],
  userComments: [],
  commentsLoaded: false,
  commentedPostId: '',
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMMENTS_LOADED':
      return {
        ...state,
        commentsLoaded: true,
      };

    case 'SET_POST_COMMENTS': {
      return {
        ...state,
        comments: action.payload.data,
        commentedPostId: action.payload.id,
        commentsLoaded: true,
      };
    }

    case 'ADD_COMMENT': {
      const updatedItems = [action.payload, ...state.comments];
      return {
        ...state,
        comments: updatedItems,
        commentsLoaded: true,
      };
    }

    case 'REMOVE_COMMENT': {
      const updatedItems = state.comments.filter(comment => {
        return comment._id !== action.payload;
      });

      return {
        ...state,
        comments: updatedItems,
      };
    }

    default:
      return state;
  }
};

export default comments;
