import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmPoster from '../common/filmPoster/FilmPoster.jsx';

class FilmDetails extends Component {
  render() {
    return (
      <div>
        <FilmPoster/>

        <div>
          <span>{this.props.filmName}</span>
          <span>{this.props.rate}</span>
        </div>

        <span>{this.props.shortDescription}</span>

        <div>
          <span>{this.props.yearOfIssue}</span>
          <span>{this.props.duration} min</span>
        </div>

        <span>{this.props.longDescriptions}</span>
      </div>
    );
  }
}

FilmDetails.propTypes = {
  filmName: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  shortDescription: PropTypes.string.isRequired,
  yearOfIssue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  longDescriptions: PropTypes.string.isRequired,
};

export default FilmDetails;
