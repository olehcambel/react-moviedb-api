// import * as types from '../constants'

export default (count = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    default:
      return count;
  }
};
