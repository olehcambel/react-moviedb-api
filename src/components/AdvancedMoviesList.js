import React from 'react';
import MoviesList from './MoviesList';

import { compose } from 'recompose';

const withLoading = conditionFn => Component => props => (
  <div>
    <Component {...props} />

    <div className="interactions">
      {conditionFn(props) && <span>Loading...</span>}
    </div>
  </div>
);

const withPaginated = conditionFn => Component => props => (
  <div>
    <Component {...props} />

    <div className="interactions">
      {conditionFn(props) && (
        <div>
          <div>{props.isError}</div>
          <button type="button" onClick={props.onPaginatedSearch}>
            Try Again
          </button>
        </div>
      )}
    </div>
  </div>
);

const withInfiniteScroll = conditionFn => Component =>
  class WithInfiniteScroll extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => conditionFn(this.props) && this.props.onPaginatedSearch();

    render() {
      return <Component {...this.props} />;
    }
  };

const paginatedCondition = props =>
  props.page !== null && !props.isLoading && props.isError;

const infiniteScrollCondition = props =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  props.movies.length &&
  !props.isLoading &&
  !props.isError;

const loadingCondition = props => props.isLoading;

const AdvancedList = compose(
  withPaginated(paginatedCondition),
  withInfiniteScroll(infiniteScrollCondition),
  withLoading(loadingCondition)
)(MoviesList);

export default AdvancedList;
