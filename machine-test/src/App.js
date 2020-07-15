import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from './containers/Login';
import NavBar from './containers/NavBar';
import Tasks from './containers/Tasks';
import User from './containers/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/navbar" component={NavBar} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/user" component={User} />

          <Route render={() => <h2>404 Page Not Found</h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
