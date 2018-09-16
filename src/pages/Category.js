import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Navigation from './../components/Navigation';
import Header from '../components/Header';
import Movies from '../components/Movies';

export default ({ match, location }) => {
  return (
    <Grid>
      <div>
        <Navigation />
        <Header title={match.params.genre} noSearch />
      </div>
      <main>
        <Movies searchBy="byGenre" id={location.state.id} />
      </main>
    </Grid>
  );
};
