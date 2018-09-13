import React from 'react';
import { connect } from 'react-redux';
import { favoriteAdd, favoriteRemove } from '../AC';
import Heart from './styling/Heart';

const Favorite = ({ id, favoriteAdd, favoriteRemove, isFav }) => {
  const toggleFav = () => {
    isFav ? favoriteRemove(id) : favoriteAdd(id);
  };

  return (
    <div onClick={toggleFav}>
      <Heart small isFav={isFav} />
    </div>
  );
};

const mapStateToProps = ({ ids }, { id }) => {
  return {
    isFav: ids.idsFavorite.includes(id)
  };
};

export default connect(
  mapStateToProps,
  { favoriteAdd, favoriteRemove }
)(Favorite);
