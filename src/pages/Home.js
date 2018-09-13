import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Navigation from './../components/Navigation';
import Header from '../components/Header';
import Movies from '../components/Movies';

export default () => (
  <Grid>
    <div>
      <Navigation />
      <Header />
    </div>
    <main>
      <Movies searchBy="byPopular" />
    </main>
  </Grid>
);
