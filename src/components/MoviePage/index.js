import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { movieLoadById } from '../../AC';
import { movieSelector } from '../../selectors';
import MovieInfo from './MovieInfo';
import Header from '../Header';
import Video from '../Video';

const BackButton = styled.button`
  background-color: ${props => props.theme.darkGrey};
  border: 1px solid ${props => props.theme.midGrey};
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Section = styled.div`
  width: 100%;

  p {
    word-break: break-word;
    #max-width: 400px;
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

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.main};
  letter-spacing: 0.11px;
  line-height: 21px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

class MoviePage extends Component {
  state = {};

  render() {
    const { movie } = this.props;
    if (!movie) return 'UNDER CONSTRUCTION';
    return (
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12}>
          <BackButton onClick={this.handleBackClick}>{'👈'}</BackButton>
          <Section>
            <MovieInfo movie={movie} />
            <Row>
              <Header title="Overview" noSearch medium />
            </Row>
            {/* <Flex column style={{ marginBottom: '40px' }}> */}
            <Row>
              <Description>{movie.overview}</Description>
            </Row>
            {/* <Row>
              <Header title="Video" noSearch medium />
            </Row> */}
            {/* <Row> */}
            <Video movieId={movie.trailer.key} title={movie.trailer.name} />
            {/* </Row> */}
          </Section>
          {/* </Flex> */}
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    const { loading, id, movie, movieLoadById } = this.props;
    /**Check
     * I don't know another way to check whether movie has full desc,
     * that could be gained only with loadById and not cached with previous.
     * so in this way will be rendered what we have and then fetched all info
     */
    if (!loading && (!movie || !movie.status)) {
      movieLoadById(id);
    }
  }

  handleBackClick = () => {
    this.props.history.goBack();
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: movieSelector(state, ownProps)
  };
};

export default connect(
  mapStateToProps,
  { movieLoadById }
)(MoviePage);
