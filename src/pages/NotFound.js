import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import Navigation from './../components/Navigation';
import Error404 from './../components/errors/Error404';

const NotFound = () => (
  <Grid>
    <div>
      <Navigation />
    </div>
    <main>
      <Row>
        <Col xs={12}>
          <Error404 />
        </Col>
      </Row>
    </main>
  </Grid>
);

export default NotFound;
