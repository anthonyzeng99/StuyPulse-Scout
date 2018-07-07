import React from 'react';
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddMatchPage from '../components/AddMatchPage';
import EditMatchPage from '../components/EditMatchPage';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Teams from '../components/Teams'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path='/teams' component={Teams} />
        <Route path='/addmatch' component={AddMatchPage} />
        <Route path='/editmatch/:id' component={EditMatchPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
