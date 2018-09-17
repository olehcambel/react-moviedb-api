import { OrderedMap, Map } from 'immutable';

export const arrToMap = (array, DataRecord = Map) => {
  return array.reduce(
    (acc, data) => acc.set(data.id, new DataRecord(data)),
    new OrderedMap({})
  );
};

export const mapToArr = obj => obj.valueSeq().toArray();

export const mapMovies = data =>
  data.map(
    ({
      id,
      title,
      overview,
      backdrop_path,
      genre_ids,
      release_date,
      vote_average,
      vote_count,
      runtime
    }) => ({
      id,
      title,
      overview,
      genreIds: genre_ids,
      backdropPath: backdrop_path,
      releaseDate: release_date,
      voteAverage: vote_average,
      voteCount: vote_count,
      runtime
    })
  );

export const objMovie = ({
  id,
  title,
  overview,
  backdrop_path,
  release_date,
  vote_average,
  vote_count,
  runtime,
  poster_path,
  genres,
  status,
  tagline,
  videos
}) => ({
  id,
  title,
  overview,
  releaseDate: release_date,
  backdropPath: backdrop_path,
  genreIds: genres.map(genre => genre.id),
  voteAverage: vote_average,
  voteCount: vote_count,
  runtime,
  posterPath: poster_path,
  genres,
  status,
  tagline,
  trailer: videos.results[0] || { key: undefined, name: undefined }
});

export const filterBy = (by, ids) => {
  switch (by) {
    case 'byPopular':
      return ids.idsPopular;
    case 'byQuery':
      return ids.idsQuery;
    case 'byFavorite':
      return ids.idsFavorite;
    case 'byGenre':
      return ids.idsGenre;
    default:
      return undefined;
  }
};
