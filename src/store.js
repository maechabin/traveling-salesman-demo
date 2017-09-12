import { createStore } from 'redux';

const configureStore = (reducers, initialState, middleware) => {
  return createStore(
    reducers,
    initialState,
    middleware,
  );
};

export default configureStore;
