import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard'

function App () {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/main" component={DashBoard}></Route>
        </Switch>
    </Router>
  );
}

export default App;
