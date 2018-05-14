import React from 'react';
import Header from './Header';


export default class About extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>About</h1>
          Dogs Gallery created with Dog API - <a href="https://dog.ceo/dog-api/">https://dog.ceo/dog-api/</a>
        <h3>Installation</h3>
        <p>npm install</p>
        <h3>Run app</h3>
        <p>npm run start</p>
        <h3>Build app</h3>
        <p>npm run build</p>
        <p>npm run build:client</p>
        <p>npm run build:server</p>
        <h3>Run tests</h3>
        <p>npm run test</p>
        <span><i>by Sveta Leonovets</i></span>
      </div>
    );
  }
}
