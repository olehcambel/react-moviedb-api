import React from 'react';
import Tag from './styling/Tag';

const Genre = ({ genre }) => {
  return (
    <Tag
      to={{
        pathname: `${process.env.PUBLIC_URL}${makeLink(
          'category',
          genre.name
        )}`,
        state: {
          id: genre.id
        }
      }}
    >
      {/* <Tag to={process.env.PUBLIC_URL + makeLink('category', genre.name)}> */}
      #{genre.name.toLowerCase()}
    </Tag>
  );
};

const makeLink = (url, name) =>
  `/${url}/${name.replace(/(\s)+/g, '-').toLowerCase()}`;

export default Genre;
