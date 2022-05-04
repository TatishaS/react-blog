import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import user from './user';

const rootReducer = combineReducers({
  posts,
  comments,
  user,
});

export default rootReducer;
