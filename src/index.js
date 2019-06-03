import React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './js/reducers/rootReducer';

import MainPage from './js/components/pages/main';
import MoviePage from './js/components/pages/movie';

import './style/style.css';

const container = document.getElementById('container');

const initialState = {
  filmsList: [],
  sortBy: 'rating',
};
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

const NotFound = () => <h1>404 - not found</h1>;

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/search" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
), container);
