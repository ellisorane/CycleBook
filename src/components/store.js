import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/CycleBook/posts/postSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
});
