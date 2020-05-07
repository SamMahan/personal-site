import React from 'react';

// import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Test from '../Pages/Test.js';
import Test2 from '../Pages/Test2.js';
import Main from '../Pages/Main.js';
function MainRoute() {

  return (
    <Router> 
      <Switch>
        <Route strict path='/test' component={Test}></Route>
        <Route strict path='/' component={Main}></Route>
        </Switch>
    </Router>
  );
}

export default MainRoute;