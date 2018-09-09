import React from 'react';
import { connect } from 'react-redux';
import { genreSelectorRepo } from '../selectors';
import Tag from './styling/Tag';

const Genre = ({ genre }) => (
  <Tag to={makeLink('category', genre.name)}>#{genre.name.toLowerCase()}</Tag>
);

const makeLink = (url, name) =>
  `/${url}/${name.replace(/(\s)+/g, '-').toLowerCase()}`;

// url = category
// name = action scary => action-scary
// /category/action-scary
const mapStateToProps = () => {
  const genreSelector = genreSelectorRepo();

  return (state, ownProps) => ({
    genre: genreSelector(state, ownProps)
  });
};

export default connect(mapStateToProps)(Genre);
