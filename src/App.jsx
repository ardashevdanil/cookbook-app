import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import BannerContainer from './containers/BannerContainer/BannerContainer';
import fetchItems from './actions/fetchItems';
import Footer from './components/Footer/Footer';
import ItemsListContainer from './containers/ItemsListContainer/ItemsListContainer';
import NavMenu from './components/NavMenu/NavMenu';
import PhotoItem from './components/PhotoItem/PhotoItem';
import RecipeContainer from './containers/RecipeContainer/RecipeContainer';
import RecipeItem from './components/RecipeItem/RecipeItem';
import VideoItem from './components/VideoItem/VideoItem';

class App extends Component {
  componentDidMount() {
    const { dispatch, history, location } = { ...this.props };

    if (location.pathname === '/') {
      history.push('/cookbook-app');
    }
    dispatch(fetchItems('recipes'));
  }

  render() {
    const { history, location } = { ...this.props };

    return (
      <div className="App">
        <div className="App__logo" />
        <NavMenu
          history={history}
          location={location}
        />
        <Route
          exact
          path="/cookbook-app"
          component={BannerContainer}
        />
        <RecipeContainer />
        <Switch>
          <Route
            path="/cookbook-app/photos"
            render={props => <ItemsListContainer {...props} item={PhotoItem} />}
          />
          <Route
            path="/cookbook-app/search"
            render={props => <ItemsListContainer {...props} item={RecipeItem} />}
          />
          <Route
            path="/cookbook-app/videos"
            render={props => <ItemsListContainer {...props} item={VideoItem} />}
          />
          <Route
            exact
            path="/cookbook-app"
            render={props => <ItemsListContainer {...props} item={RecipeItem} />}
          />
          <Route
            exact
            path="/cookbook-app/recipes"
            render={props => <ItemsListContainer {...props} item={RecipeItem} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
