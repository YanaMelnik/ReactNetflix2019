import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import Footer from './js/components/common/footer/Footer.jsx';
import Search from './js/components/search/Search.jsx';
import FilmListMenu from './js/components/filmListMenu/FilmListMenu.jsx';
import './style/style.css';
import FilmList from './js/components/filmList/FilmList.jsx';
import ErrorBoundary from './js/components/common/errorBoundary/ErrorBoundary.jsx';
import FilmDetails from './js/components/filmDetails/FilmDetails.jsx';

const FuncComponent = ({ name }) => <h1>Hello Functional {name}</h1>;
FuncComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

const container = document.getElementById('container');
const filmsArrayElement = [
  {
    id: 1,
    title: 'Film Name',
    tagline: '',
    vote_average: 1,
    vote_count: 1,
    release_date: '1994',
    poster_path: 'https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg',
    overview: 'description',
    budget: 1,
    revenue: 1,
    runtime: 1,
    genres: ['drama'],
  },
  {
    id: 1,
    title: 'Film Name',
    tagline: '',
    vote_average: 1,
    vote_count: 1,
    release_date: '1995',
    poster_path: 'https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg',
    overview: 'description',
    budget: 1,
    revenue: 1,
    runtime: 1,
    genres: ['drama'],
  },
  {
    id: 1,
    title: 'Film Name',
    tagline: '',
    vote_average: 1,
    vote_count: 1,
    release_date: '1996',
    poster_path: 'https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg',
    overview: 'description',
    budget: 1,
    revenue: 1,
    runtime: 1,
    genres: ['drama'],
  },
];

ReactDOM.render((
  <ErrorBoundary>
    <FilmDetails
      filmName='Film name'
      url='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'
      rate={4.1}
      shortDescription='shortDescription'
      yearOfIssue={1995}
      duration={55}
      longDescriptions={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
      + 'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '
      + 'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '
      + 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt '
      + 'mollit anim id est laborum.'}/>
    <FilmListMenu className='film-list-menu' resultLength='5'/>
    <FilmList filmsArray={filmsArrayElement}/>
    <Footer/>
  </ErrorBoundary>
), container);
