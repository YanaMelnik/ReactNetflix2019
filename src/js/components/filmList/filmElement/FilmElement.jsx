import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmPoster from '../../common/filmPoster/FilmPoster.jsx';
import './FilmElement.css';

class FilmElement extends Component {
  render() {
    return (
      <div className='film-element'>
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

FilmElement.propTypes = {
  filmName: PropTypes.string.isRequired,
  yearOfIssue: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  filmPosterUrl: PropTypes.string.isRequired,
};

export default FilmElement;
