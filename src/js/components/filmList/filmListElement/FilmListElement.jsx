import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmPoster from '../../common/filmPoster/FilmPoster';

import './FilmListElement.css';

class FilmListElement extends Component {
  render() {
    return (
      <div>
        <FilmPoster filmName={this.props.filmName} imgUrl={this.props.filmPosterUrl}/>

        <div className='film-element__header'>
          <span className='film-element__title'>{this.props.filmName}</span>
          <span className='film-element__year'>{this.props.yearOfIssue}</span>
        </div>

        <span className='film-element__genre'>{this.props.genre}</span>
      </div>
    );
  }
}

FilmListElement.propTypes = {
  filmName: PropTypes.string.isRequired,
  yearOfIssue: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  filmPosterUrl: PropTypes.string.isRequired,
};

export default FilmListElement;
