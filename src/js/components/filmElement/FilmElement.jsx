import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmPoster from '../common/filmPoster/FilmPoster.jsx';

class FilmElement extends Component {
  render() {
    return (
      <div>
        <FilmPoster/>

        <div>
          <span>{this.props.filmName}</span>
          <span>{this.props.yearOfIssue}</span>
        </div>

        <span>{this.props.genre}</span>
      </div>
    );
  }
}

FilmElement.propTypes = {
  filmName: PropTypes.string.isRequired,
  yearOfIssue: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default FilmElement;
