import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import flushChunks from 'webpack-flush-chunks';

import { StaticRouter } from 'react-router';

import App from '../shared/App';

import configureStore from '../shared/core/configure-store';

export default ({ clientStats }) => async (req, res) => {
  const preloadedState = {
    dogs: {
      isFetching: false,
      dogs: {
        testDog: ['dog1', 'dog2'],
        testDog1: ['dog1', 'dog2'],
      },
    },
  };
  const store = configureStore(preloadedState);
  const context = {};

  const app = (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  const appString = ReactDOM.renderToString(app);
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });
  const { title } = Helmet.renderStatic();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.render('index', {
      title: title.toString(),
      appString,
      js,
      styles,
      cssHash,
      preloadedState: JSON.stringify(preloadedState),
    });
  }
};
