import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  display: block;
  max-width: 100%;
`;

const Poster = ({ path, name }) => {
  debugger;
  return (
    <Thumbnail src={`http://image.tmdb.org/t/p/w400/${path}`} alt={name} />
  );
};

export default Poster;
