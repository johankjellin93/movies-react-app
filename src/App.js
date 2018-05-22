/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import NewMoviesList from './NewMoviesList';
import ComingSoonList from './ComingSoonList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <ul>
          <li><NavLink exact to="/">Top Movies</NavLink></li>
          <li><NavLink to="/NewMoviesList">New Movies</NavLink></li>
          <li><NavLink to="/ComingSoonList">Coming Soon</NavLink></li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/NewMoviesList" component={NewMoviesList} />
        <Route exact path="/ComingSoonList" component={ComingSoonList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;
