import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
