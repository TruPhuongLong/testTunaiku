import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import ListFilm from './list.film'
import DetailFilm from './detail.film';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/" exact to="/films" />
          <Route path="/films" exact component={ListFilm} />
          <Route path="/detail" exact component={DetailFilm} />
        </Switch>
      </div>
    );
  }
}

export default App;
