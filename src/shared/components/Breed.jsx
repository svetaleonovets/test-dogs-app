import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { fetchSubBreedImages, fetchSubBreeds } from '../../api';
import ImagesSlider from './ImagesSlider';
import Header from './Header';

// breed and subbreed component
const mapStateToProps = ({ dogs }) => ({
  dogs
});
@connect(mapStateToProps, {
  fetchSubBreedImages,
  fetchSubBreeds
})

export default class Breed extends Component {
  componentDidMount() {
    const { breed, subbreed } = this.props.match.params;
    if (!subbreed && !this.props.dogs.dogs[breed]) {
      this.props.fetchSubBreeds(breed);
    }
    this.props.fetchSubBreedImages(breed, subbreed);
  }

  componentWillReceiveProps(nextProps) {
    const { breed, subbreed } = nextProps.match.params;
    if (breed !== this.props.match.params.breed || subbreed !== this.props.match.params.subbreed) {
      this.props.fetchSubBreedImages(breed, subbreed);
    }
  }

  // render
  render() {
    const { dogs, subbreedImages, isFetching } = this.props.dogs;
    const { breed, subbreed } = this.props.match.params;
    const breedPage = typeof subbreed === 'undefined';
    const title = `${breed} ${breedPage ? '' : subbreed}`;
    return (
      <div className="container">
        <Header/>
        <Loader isFetching={isFetching}/>
        <h3>{title}</h3>
        {
          breedPage && dogs[breed] && dogs[breed].length ?
            (
              <div>
                <p>Show by subbreed</p>
                {
                  dogs[breed].map(d => (
                    <div key={d}>
                      <Link to={`/breeds/${breed}/${d}`}>{d}</Link>
                    </div>))
                }
              </div>
            ) : null
        }
        <ImagesSlider images={subbreedImages} />
      </div>
    );
  }
}

Breed.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
  dogs: PropTypes.objectOf(PropTypes.object).isRequired,
  fetchSubBreedImages: PropTypes.func,
  fetchDogs: PropTypes.func,
};

Breed.defaultProps = {
  dogs: {},
};
