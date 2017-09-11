import { createStore } from 'redux';

const configureStore = (reducers, initialState) => {
  return createStore(
    reducers,
    initialState,
  );
};

export default configureStore;
