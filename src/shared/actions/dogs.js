export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';
export const REQUEST_BREEDS = 'REQUEST_BREEDS';
export const REQUEST_SUBBREED_IMAGES = 'REQUEST_SUBBREED_IMAGES';
export const RECEIVE_SUBBREED_IMAGES = 'RECEIVE_SUBBREED_IMAGES';
export const REQUEST_SUBBREEDS = 'REQUEST_SUBBREEDS';
export const RECEIVE_SUBBREEDS = 'RECEIVE_SUBBREEDS';

export function requestBreeds() {
  return {
    type: REQUEST_BREEDS,
  };
}

export function receiveBreeds(json) {
  return {
    type: RECEIVE_BREEDS,
    dogs: json.message,
  };
}

export function requestSubBreedImages() {
  return {
    type: REQUEST_SUBBREED_IMAGES,
  };
}

export function receiveSubBreedImages(json) {
  return {
    type: RECEIVE_SUBBREED_IMAGES,
    images: json.message,
  };
}

export function requestSubBreeds() {
  return {
    type: REQUEST_SUBBREEDS,
  };
}

export function receiveSubBreeds(breed, json) {
  return {
    type: RECEIVE_SUBBREEDS,
    breeds: breed,
    subbreeds: json.message,
  };
}
