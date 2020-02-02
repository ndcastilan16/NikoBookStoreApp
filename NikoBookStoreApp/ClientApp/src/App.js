import React, { Component } from 'react';
import Books from './Books';
export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <div>
            <Books />
        </div>

    );
  }
}
