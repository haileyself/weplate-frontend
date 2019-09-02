import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Detail from './pages/Detail/Detail';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/detail" component={Detail} />

        </Switch>
      </Router>
    );
  }
}
export default Routes;
