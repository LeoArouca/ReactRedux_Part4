import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// Import form
// import this as this alias formReducer
// Redux form connected
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
