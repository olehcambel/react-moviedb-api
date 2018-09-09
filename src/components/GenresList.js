import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import { genreLoadAll } from '../AC';
import Genre from './Genre';

const GenresList = ({ loading, loaded, genreIds }) => {
  if (loading) return 'loading genres';
  if (!loaded) return null;
  return (
    <Fragment>
      {genreIds.map(id => (
        <Genre key={id} id={id} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { loading, loaded } = state.genres;
  return {
    loading,
    loaded
  };
};

export default connect(mapStateToProps)(GenresList);
