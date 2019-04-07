import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import Footer from './js/components/footer/Footer.jsx';
import Search from './js/components/search/Search.jsx';
import FilmListMenu from './js/components/filmListMenu/FilmListMenu.jsx';

const FuncComponent = ({ name }) => <h1>Hello Functional {name}</h1>;
FuncComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

const container = document.getElementById('container');
ReactDOM.render((
  <div>
    <Search/>
    <FilmListMenu/>
    <Footer/>
  </div>
), container);
