import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Navigation from './../components/Navigation';
// import Header from '../components/Header';
import MoviePage from '../components/MoviePage';

export default ({ match, history }) => {
  return (
    <Grid>
      <div>
        <Navigation />
        {/* <Header title="Movie" noSearch /> */}
      </div>
      <main>
        <MoviePage history={history} id={match.params.id} />
      </main>
    </Grid>
  );
};
