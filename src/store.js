import { createStore } from 'redux';

export const configureStore = (reducers, initialState) => {
  return createStore(
    reducers,
    initialState,
  );
};