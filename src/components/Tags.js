import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import GenresList from './GenresList';
// import Genre from './Genre';
import { connect } from 'react-redux';
import { genreLoadAll } from '../AC';

import { genresSelector } from '../selectors';

class Tags extends Component {
  state = {};

  render() {
    const { genres } = this.props;
    debugger;
    const genreIds = genres.map(genre => genre.id);
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
                {/* <Genre /> */}
                {/* Fuck! reaaly ugly. make somehow else */}
                {/* {genres.length &&
                  genres.map(genre => <Genre key={genre.id} id={genre.id} />)} */}
                <GenresList genreIds={genreIds} />
              </Row>
            </main>
          </Col>
        </Row>
      </Grid>
    );
  }

  componentDidMount() {
    this.props.genreLoadAll();
  }
}

const mapStateToProps = state => {
  return {
    genres: genresSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { genreLoadAll }
)(Tags);
