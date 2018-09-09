import React from 'react';
// import axios from 'axios';
// import Header from './Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
// import MoviePageList from './MoviePageList';
import { Route, Switch } from 'react-router-dom';
import './utils/global-styles';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/favorites" component={Favorites} />
    <Route exact path="/categories" component={Tags} />
    <Route exact path="/categories/:category" component={Tag} /> */}
    <Route component={NotFound} />
  </Switch>
);
// async componentDidMount() {
//   let data = await axios.get(
//     `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`
//   );
//   debugger;
// }

// query
// `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=wonder&page=1&include_adult=false`

// process.env.API_KEY
