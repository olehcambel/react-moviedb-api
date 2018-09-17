import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Favorites from './pages/Favorites';
import Tags from './components/Tags';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import './utils/global-styles';

export default () => (
  <Switch>
    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
    <Route
      exact
      path={process.env.PUBLIC_URL + '/movie/:id'}
      component={Movie}
    />
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
    <Route
      exact
      path={process.env.PUBLIC_URL + '/category/:genre'}
      component={Category}
    />
    <Route component={NotFound} />
  </Switch>
);
