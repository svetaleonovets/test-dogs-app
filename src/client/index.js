import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../shared/core/configure-store';

import App from '../shared/App';

const store = configureStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

const render = (Component) => {
  hydrate(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('react-root'),
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('../shared/App', () => {
    const App = require('../shared/App').default;
    render(App);
  });
}
