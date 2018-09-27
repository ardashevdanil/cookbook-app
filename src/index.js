import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import cookbookApp from './reducers/combinedReducers';

const store = createStore(
  cookbookApp,
  applyMiddleware(
    logger,
    thunkMiddleware,
  ),
);

const buildApp = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(
  buildApp, document.getElementById('root'),
);

registerServiceWorker();

export default buildApp;
