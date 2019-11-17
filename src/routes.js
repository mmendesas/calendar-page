import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from './pages/Events';

export default function Routes() {
  return (
    <Switch>
      <Route path="/events" exact component={Events} />
    </Switch>
  );
}
