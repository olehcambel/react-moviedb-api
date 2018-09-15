import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 4px;
  padding: 5px;
`;

const Poster = ({ path, name }) => {
  return (
    <Thumbnail src={`https://image.tmdb.org/t/p/w300/${path}`} alt={name} />
  );
};

export default Poster;
