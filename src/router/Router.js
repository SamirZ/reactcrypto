import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';
import Settings from '../components/Settings/Settings';
import Navigation from '../components/Navigation/Navigation';
import Details from '../components/Details/Details';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Navigation history={history} />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/settings" component={Settings} exact={true} />
        <Route path="/details" component={Details} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;