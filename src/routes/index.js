import React from 'react';
import Home from '../components/Home';
import Login from '../components/Login';
import Account from '../components/Account';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

function Routes ({handler}) {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/politics" component={Home} />
          <Route exact path="/business" component={Home} />
          <Route exact path="/tech" component={Home} />
          <Route exact path="/science" component={Home} />
          <Route exact path="/sports" component={Home} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
    )
}

export default Routes
