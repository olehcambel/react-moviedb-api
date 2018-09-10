import * as types from '../constants';

const defaultFilter = {
  searchBy: 'byPopular',
  query: ''
};

export default (filter = defaultFilter, action) => {
  switch (action.type) {
    // case types.FILTER_RANGE_SELECTION:
    //   return {
    //     ...filter, selection: action.payload.selection
    //   }
    // case types.FILTER_RANGE_PERIOD:
    // const {from, to} = action.payload.period
    //   return {
    //     ...filter, period: {from, to}
    //   }

    case types.FILTER_SET_DEFAULT:
      return {
        ...filter,
        query: '',
        searchBy: 'byPopular'
      };

    case types.MOVIE_LOAD_PER_PAGE + types.START:
      return {
        ...filter,
        searchBy: 'byPopular'
      };

    case types.MOVIE_LOAD_BY_QUERY + types.START:
      return {
        ...filter,
        searchBy: 'byQuery',
        query: action.payload.query
      };
    default:
      return filter;
  }
};

// filter: '' // query, popular
