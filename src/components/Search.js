import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { movieLoadByQuery, filterSetDefault } from '../AC';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  width: 300px;
  position: relative;
  transition: all 0.35s ease-in-out;

  @media (min-width: 769px) {
    &.expanded {
      margin-left: -100%;
      width: 100%;
    }
  }
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid black
    padding: 5px 5px 5px 35px;
    width: 100%;
    font-size: 40px;
    font-weight: 300;
    outline: none;
    background: white
    color: black
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

class Search extends Component {
  state = { focused: false };

  render() {
    return (
      <Wrapper className={this.state.focused ? 'expanded' : ''}>
        <Input
          aria-label="Search"
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          innerRef={node => (this.input = node)}
          placeholder="Search"
          type="text"
        />
      </Wrapper>
    );
  }

  onChange = debounce(() => {
    const { value } = this.input;
    // если нету Валуе, походу все равно нужно экшн вызывать
    value
      ? this.props.movieLoadByQuery(1, value)
      : this.props.filterSetDefault();
  }, 350);

  onFocus = () => {
    this.setState({ focused: true });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };
}

export default connect(
  null,
  { movieLoadByQuery, filterSetDefault }
)(Search);
