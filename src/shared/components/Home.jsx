import React from 'react';
import Helmet from 'react-helmet';

import { Link } from 'react-router-dom';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div>
          <Helmet>
            <title>Dogs App</title>
          </Helmet>
          <h1>Welcome to Dogs Gallery</h1>
        </div>
        <ul>
          <li>
            <Link to="/breeds">Show me all breeds</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}
