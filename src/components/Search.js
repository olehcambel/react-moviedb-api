import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

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

  onChange = () => {
    debugger;
    console.log(this.input.value);
  };

  // onChange = debounce(() => {
  //   console.log(this.props);
  //   console.log(this.inputRef.current.value);
  // }, 200);

  onFocus = () => {
    this.setState({ focused: true });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };
}

export default Search;
