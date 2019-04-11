import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import Footer from './js/components/common/footer/Footer.jsx';
import SearchBlock from './js/components/searchBlock/SearchBlock.jsx';
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
    id: 2,
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
    id: 3,
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
      filmName={filmsArrayElement[0].title}
      url={filmsArrayElement[0].poster_path}
      rate={filmsArrayElement[0].vote_average}
      shortDescription={filmsArrayElement[0].tagline}
      yearOfIssue={filmsArrayElement[0].release_date}
      duration={filmsArrayElement[0].runtime}
      longDescriptions={filmsArrayElement[0].overview}/>
    <FilmListMenu className='film-list-menu' resultLength={filmsArrayElement.length}/>
    <FilmList filmsArray={filmsArrayElement}/>
    <Footer/>
  </ErrorBoundary>
), container);
