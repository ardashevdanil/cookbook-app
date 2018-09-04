import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.history.push('/cookbook-app');
  }

  render() {
    return (
      <div className="App">
        <div className="App__logo"></div>
      </div>
    );
  }
}

export default App;