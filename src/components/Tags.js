import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import GenresList from './GenresList';

const Tags = props => {
  return (
    <Grid>
      <div>
        <Navigation />
        <Header title="Categories" noSearch />
      </div>
      <Row>
        <Col xs={12}>
          <main>
            <Row style={{ justifyContent: 'space-around' }}>
              <GenresList all />
            </Row>
          </main>
        </Col>
      </Row>
    </Grid>
  );
};

export default Tags;
