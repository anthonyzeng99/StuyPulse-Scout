import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
