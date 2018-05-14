import 'whatwg-fetch';
import {
  requestBreeds,
  receiveBreeds,
  requestSubBreedImages,
  receiveSubBreedImages,
  requestSubBreeds,
  receiveSubBreeds,
} from '../shared/actions/dogs';


export function fetchDogs() {
  return (dispatch) => {
    dispatch(requestBreeds());

    return fetch('https://dog.ceo/api/breeds/list/all', {
      method: 'GET',
    }).then(res => res.json()).then((data) => {
      dispatch(receiveBreeds(data));
    });
  };
}

export function fetchSubBreedImages(breed, subbreed) {
  return (dispatch) => {
    dispatch(requestSubBreedImages());
    return fetch(`https://dog.ceo/api/breed/${breed}${subbreed ? `/${subbreed}` : ''}/images`, {
      method: 'GET',
    }).then(res => res.json()).then((data) => {
      dispatch(receiveSubBreedImages(data));
    });
  };
}

export function fetchSubBreeds(breed) {
  return (dispatch) => {
    dispatch(requestSubBreeds());
    return fetch(`https://dog.ceo/api/breed/${breed}/list`, {
      method: 'GET',
    }).then(res => res.json()).then((data) => {
      dispatch(receiveSubBreeds(breed, data));
    });
  };
}
