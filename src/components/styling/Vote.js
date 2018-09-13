import React, { Fragment } from 'react';

export default ({ number, max, small }) => {
  let percent = Math.floor((number * 100) / max);
  return (
    <Fragment>
      {percent >= 65 ? '🍅' : '🤢️'}
      {percent}%
    </Fragment>
  );
};
