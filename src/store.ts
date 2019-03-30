import { createStore, Reducer, DeepPartial, StoreEnhancer, Store } from 'redux';

import { State } from './state.model';

const configureStore = (
  reducers: Reducer,
  initialState: DeepPartial<State>,
  middleware: StoreEnhancer,
): Store => {
  return createStore(reducers, initialState, middleware);
};

export default configureStore;
