import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Detail from './pages/Detail/Detail';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/:id" component={Main} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
