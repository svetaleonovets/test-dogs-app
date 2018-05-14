import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Breeds from './components/Breeds';
import Breed from './components/Breed';

import './app.styl';

// entry point for the app + routes
const FullBreeds = () => (
  <Switch>
    <Route exact path="/breeds" component={Breeds} />
    <Route path="/breeds/:breed" component={SubBreeds} />
  </Switch>
);

const SubBreeds = () => (
  <Switch>
    <Route exact path="/breeds/:breed" component={Breed} />
    <Route path="/breeds/:breed/:subbreed" component={Breed} />
  </Switch>
);
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/breeds" component={FullBreeds} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
