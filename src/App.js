import React, { Component } from 'react';
import './App.css';
import { Coordenates } from './components/coordenates.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      iss: {},
    }
  }

  //This is a lifecycle method
  componentDidMount() {
    fetch('http://api.open-notify.org/iss-now.json') // fetch returns a promise
    .then(response => response.json()) // this returns a response that we need to return in a json format
    .then(coordenates => this.setState({iss: coordenates}));  // this returns an array of objects with the coordenates data in the api
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
