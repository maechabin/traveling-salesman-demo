import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import configureStore from './store';
import demoReducer from './demo/demoReducer';
import demoState from './demo/demoState';

import './index.css';
import DemoContainer from './demo/DemoContainer';
import registerServiceWorker from './registerServiceWorker';

const middleware = () => applyMiddleware(thunk);

const store = configureStore(demoReducer, demoState, middleware());

ReactDOM.render(
  <Provider store={store}>
    <DemoContainer google={window.google} />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
