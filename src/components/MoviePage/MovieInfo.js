import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-styled-flexboxgrid';
import Flex from 'styled-flex-component';
import Poster from '../Poster';
import Header from '../Header';
import Genre from '../Genre';
import Vote from '../styling/Vote';

const Wrapper = styled(Row)`
  margin-bottom: 30px;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Desc = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      margin-top: 10px;
      margin-bottom: 0;
    }
  }
`;

const Field = styled.span`
  font-weight: 400;
  color: ${props => props.theme.main};
`;

const Section = styled.div`
  width: 100%;

  p {
    word-break: break-word;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin: auto;

    p {
      word-break: break-word;
      text-align: center;
    }
  }
`;

export default ({
  movie: {
    posterPath,
    title,
    releaseDate,
    genres,
    voteAverage,
    runtime,
    tagline,
    voteCount
  }
}) => {
  // debugger;

  return (
    <Wrapper>
      <Desc>
        <Poster path={posterPath} name={title} size={300} />
        <Section>
          <Header title={title} noSearch medium />
          <Flex column style={{ marginBottom: '40px' }}>
            <Field>{getYear(releaseDate)}</Field>
            <Field>{tagline}</Field>
            <Field>
              {genres.map(genre => (
                <Genre key={genre.id} genre={genre} />
              ))}
            </Field>
            <Field>
              <Vote number={voteAverage} max="10" />, {voteCount} people voted
            </Field>
            <Field>{runtime}m</Field>
          </Flex>
        </Section>
      </Desc>
    </Wrapper>
  );
};

const getYear = date =>
  new Date(date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
