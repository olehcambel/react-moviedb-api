import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Navigation from './../components/Navigation';
import Header from '../components/Header';

export default () => (
  <Grid>
    <div>
      <Navigation />
      <Header />
    </div>
    <main>
      <h1>Info</h1>
    </main>
  </Grid>
);
