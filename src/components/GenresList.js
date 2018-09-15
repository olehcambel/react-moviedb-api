import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Genre from './Genre';
import { genreLoadAll } from '../AC';
import { genresSelector } from '../selectors';

class GenresList extends Component {
  state = {};

  render() {
    const { loading, loaded, genres } = this.props;
    if (!loaded || loading) return null;
    return (
      <Fragment>
        {genres.map(genre => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.genreLoadAll();
  }
}

const mapStateToProps = (state, ownProps) => ({
  genres: genresSelector(state, ownProps),
  loading: state.genres.loading,
  loaded: state.genres.loaded
});

export default connect(
  mapStateToProps,
  { genreLoadAll }
)(GenresList);
