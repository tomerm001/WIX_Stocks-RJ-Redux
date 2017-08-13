import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import {Provider} from 'react-redux';
import {store} from './view/App/index';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
