import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard'
import inputOnly from './pages/단독매매'

function App () {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/main" component={DashBoard}></Route>
          <Route exact path='/inputOnly' component={inputOnly}></Route>
        </Switch>
    </Router>
  );
}

export default App;
