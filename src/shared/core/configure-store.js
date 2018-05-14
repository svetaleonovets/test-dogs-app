import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import freeze from 'redux-freeze';
import { routerMiddleware } from 'react-router-redux';

// add the middlewares
const middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));
middlewares.push(thunkMiddleware);
middlewares.push(freeze);

// apply the middleware
const middleware = applyMiddleware(...middlewares);

// create the store
export default (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, middleware);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
};
