import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/breeds">Show Dogs</Link>
      </nav>
    );
  }
}
