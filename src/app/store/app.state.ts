import { _counterReducer } from '../counter/state/counter.reducer';
import { counterState } from '../counter/state/counter.state';
import { _postsReducer } from '../post/state/posts.reducer';
import { PostsState } from '../post/state/posts.state';

export interface AppState {
  counter: counterState;
  posts: PostsState;
}

export const appReducer = {
  counter: _counterReducer,
  posts: _postsReducer,
};
