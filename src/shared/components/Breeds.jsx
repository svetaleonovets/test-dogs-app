import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from './Loader';
import Header from './Header';
import { fetchDogs } from '../../api';

const mapStateToProps = ({ dogs }) => ({
  dogs
});
@connect(mapStateToProps, {
  fetchDogs
})

// breeds list component
export default class Breeds extends Component {
  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    const { dogs, isFetching } = this.props.dogs;
    return (
      <div className="container">
        <Header/>
        <Loader isFetching={isFetching}/>
        { Object.keys(dogs).length === 0 ? (<div className="noData">No Data</div>) : null }
        {
          dogs && Object.keys(dogs).map(breed => (
            <div key={breed}>
              <Link to={`/breeds/${breed}`} style={{ color: 'red' }} className="breed">
                {breed}
              </Link>
            </div>
          ))
        }
      </div>
    );
  }
}

Breeds.propTypes = {
  dogs: PropTypes.objectOf(PropTypes.object).isRequired,
  fetchDogs: PropTypes.func,
};
Breeds.defaultProps = {
    dogs: {},
};