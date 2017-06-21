import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/';
import Dashboard from './views/Dashboard/';

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Dashboard" component={Full}>
    	<IndexRoute component={Dashboard}/>
      <Route path="overview" name="overview" component={Dashboard}/>
    </Route>
  </Router>
);