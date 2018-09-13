import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${small => (small ? '20px' : '40px')};
  margin-bottom: 5px;
  cursor: pointer;
`;

export default ({ isFav }) => <Wrapper>{isFav ? '💔' : '❤️'}</Wrapper>;
