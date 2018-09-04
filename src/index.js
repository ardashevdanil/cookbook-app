import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import './index.css';

import App from './App';

const store = {};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/cookbook-app" component={App} />
    </Router>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
