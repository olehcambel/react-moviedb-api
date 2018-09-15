import React from 'react';
// import axios from 'axios';
// import Header from './Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
// import MoviePageList from './MoviePageList';
import { Route, Switch } from 'react-router-dom';
import Tags from './components/Tags';
import './utils/global-styles';

export default () => (
  <Switch>
    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

    <Route
      exact
      path={process.env.PUBLIC_URL + '/favorites'}
      component={Favorites}
    />
    <Route
      exact
      path={process.env.PUBLIC_URL + '/categories'}
      component={Tags}
    />
    {/* <Route exact path="/categories/:category" component={Tag} /> */}
    <Route component={NotFound} />
  </Switch>
);
