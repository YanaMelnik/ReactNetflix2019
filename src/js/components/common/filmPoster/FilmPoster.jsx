import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FilmPoster.css';

class FilmPoster extends Component {
  render() {
    return (
      <img className='film__poster' src={this.props.imgUrl} alt={this.props.filmName}/>
    );
  }
}

FilmPoster.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  filmName: PropTypes.string.isRequired,
};

export default FilmPoster;
