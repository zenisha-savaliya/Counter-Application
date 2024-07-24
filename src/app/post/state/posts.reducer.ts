import { createReducer } from '@ngrx/store';
import { intialState } from './posts.state';

export const _postsReducer = createReducer(intialState);
