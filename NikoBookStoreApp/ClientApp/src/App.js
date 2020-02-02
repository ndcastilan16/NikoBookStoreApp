import React, { Component } from 'react';
import { Route } from 'react-router';

import { Home } from './components/Home';
import { FetchData } from './components/FetchData';


import Header from './Header';
import Books from './Books';
export default class App extends Component {
  displayName = App.name

  render() {
    return (

        <div>
            <Header />
                <Books />
            </div>


    );
  }
}
