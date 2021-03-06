import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';

//Components
import LoadingPage from './components/LoadingPage'

//Actions
import { startSetMatches } from './actions/matches'

//Store
import configureStore from './store/configureStore';

//Stylesheets
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(app, document.getElementById('root'));
//     hasRendered = true;
//   }
// };

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

store.dispatch(startSetMatches()).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
});
