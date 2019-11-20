import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from './pages/Events';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events" component={Events} />
    </Switch>
  );
}
