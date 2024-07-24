import { createReducer, on } from '@ngrx/store';
import { intialState } from './counter.state';
import {
  changeName,
  customIncrement,
  decrement,
  increment,
  reset,
} from './counter.actions';

export const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeName, (state) => {
    return {
      ...state,
      name: 'Changed name',
    };
  })
);
