import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import { demoReducer } from './demo/demoReducer';
import { demoState } from './demo/demoState';

import './index.css';
import DemoContainer from './demo/DemoContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(demoReducer, demoState);

ReactDOM.render(
  <Provider store={store}>
    <DemoContainer />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
