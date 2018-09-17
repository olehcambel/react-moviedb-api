import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 10px;
  padding: 5px;
  box-shadow: ${props => props.theme.shadow};
`;

const Poster = ({ path, name, size = 400 }) => {
  return path ? (
    <Thumbnail src={`https://image.tmdb.org/t/p/w${size}/${path}`} alt={name} />
  ) : null;
};

export default Poster;
