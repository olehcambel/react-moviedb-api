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
    border-bottom: 1px solid ${props => props.theme.main}
    padding: 20px 5px 15px 35px;
    width: 100%;
    font-size: 34px;
    font-weight: 300;
    outline: none;
    background: ${props => props.theme.darkGrey}
    color: ${props => props.theme.main}
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

class Search extends Component {
  state = { focused: false };

  render() {
    return (
      <Wrapper
        className={
          this.state.focused || (this.input && this.input.value)
            ? 'expanded'
            : ''
        }
      >
        <Input
          aria-label="Search"
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onCancel}
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

  onCancel = e => {
    if (e.nativeEvent.code === 'Escape') {
      this.input.value = '';
      this.onBlur();
      this.onChange();
    }
  };
}

export default connect(
  null,
  { movieLoadByQuery, filterSetDefault }
)(Search);
