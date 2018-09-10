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
      genre_ids,
      poster_path,
      release_date,
      vote_average
    }) => ({
      id,
      title,
      overview,
      genreIds: genre_ids,
      posterPath: poster_path,
      releaseDate: release_date,
      voteAverage: vote_average
    })
  );
