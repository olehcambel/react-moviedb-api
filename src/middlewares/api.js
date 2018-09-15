import * as types from '../constants';
import axios from 'axios';

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);

  next({
    type: type + types.START,
    ...rest
  });

  axios(callAPI)
    .then(response =>
      next({
        type: type + types.SUCCESS,
        response: response.data,
        ...rest
      })
    )
    .catch(error => {
      debugger;
      console.error(error.message);
      next({
        type: type + types.FAIL,
        response: error
      });
    });
};
