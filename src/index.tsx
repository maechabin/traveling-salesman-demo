import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import configureStore from './store';
import demoReducer from './demo/demoReducer';
import { state } from './state';

import './index.css';
import DemoContainer from './demo/DemoContainer';
import registerServiceWorker from './registerServiceWorker';

const middleware = () => applyMiddleware(thunk);

const store = configureStore(demoReducer, state, middleware());

ReactDOM.render(
  <Provider store={store}>
    <DemoContainer />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
