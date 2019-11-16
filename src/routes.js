import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Calendar from './pages/Calendar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Calendar} />
    </Switch>
  );
}
