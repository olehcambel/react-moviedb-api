import React from 'react';
import styled from 'styled-components';
// import ReactPlayer from 'react-player';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import { Row } from 'react-styled-flexboxgrid';
import Header from './Header';
import Flex from 'styled-flex-component';

const Wrapper = styled(Row)`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Iframe = styled(YouTubePlayer)`
  position: relative;
  z-index: 3;
  border: none;
  transition: all 200ms ease;
  box-shadow: ${props => props.theme.shadow};
`;

export default ({ movieId }) =>
  !movieId ? null : (
    <Flex column>
      <Header title="Video" noSearch medium />
      <Wrapper>
        <Iframe url={`https://www.youtube.com/watch?v=${movieId}`} />
      </Wrapper>
    </Flex>
  );
