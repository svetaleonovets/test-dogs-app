import {
  RECEIVE_BREEDS,
  REQUEST_BREEDS,
  REQUEST_SUBBREED_IMAGES,
  RECEIVE_SUBBREED_IMAGES,
  REQUEST_SUBBREEDS,
  RECEIVE_SUBBREEDS,
} from '../actions/dogs';

const initialState = {
  isFetching: false,
  dogs: {},
  subbreedImages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BREEDS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        isFetching: false,
        dogs: action.dogs,
      });
    case REQUEST_SUBBREED_IMAGES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_SUBBREED_IMAGES:
      return Object.assign({}, state, {
        isFetching: false,
        subbreedImages: action.images,
      });
    case REQUEST_SUBBREEDS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_SUBBREEDS: {
      const breeds = Object.assign({}, state.dogs, {
        [action.breeds]: action.subbreeds,
      });
      return Object.assign({}, state, {
        isFetching: false,
        dogs: breeds,
      });
    }
    default:
      return state;
  }
};
