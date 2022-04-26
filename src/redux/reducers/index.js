import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import user from './user';
import filter from './filter';
import error from './error';

const rootReducer = combineReducers({
  posts,
  comments,
  user,
  filter,
  error
});

export default rootReducer;
