import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import ItemsList from './components/ItemsList/ItemsList';
import NavMenu from './components/NavMenu/NavMenu';
import Recipe from './components/Recipe/Recipe';

class App extends Component {

  componentDidMount() {
    this.props.history.push('/cookbook-app');
  }

  render() {
    return (
      <div className="App">
        <div className="App__logo"></div>
        <NavMenu />
        <Banner />
        <ItemsList />
        <Recipe />
        <Footer />
      </div>
    );
  }
}

export default App;