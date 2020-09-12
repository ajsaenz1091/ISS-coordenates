import React, { Component } from 'react';
import './App.css';
import { Coordenates } from './components/coordenates.component';
// const express = require('express');


class App extends Component {
  constructor(){
    super();

    this.state = {
      iss: {},
    }
  }

  //This is a lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch returns a promise
    // .then(response => response.json()) // this returns a response that we need to return in a json format
    // .then(coordenates => this.setState({iss: coordenates}));
    .then(response => console.log(response));  // this returns an array of objects with the coordenates data in the api
  }

  render() {
    return (
      <div className="App">
        <Coordenates iss={this.state.iss} />
      </div>
    );
  } 
}

export default App;
