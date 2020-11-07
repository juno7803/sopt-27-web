import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import Member from './pages/member/Member';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={ MainHeader }/>
        <Switch>
          <Route exact path='/'>My Notion Main page</Route>
          <Route path='/members' component={ Member } />
          <Route path="/*">404 NOT FOUND</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
