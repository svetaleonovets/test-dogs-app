import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Home page component
export default class Loader extends PureComponent {
  render() {
    const { isFetching } = this.props;
    return (
      <div>
        { isFetching && (<div className="loading">Loading</div>) }
        <div className={isFetching ? 'hidden' : ''} />
      </div>
    );
  }
}

Loader.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};
