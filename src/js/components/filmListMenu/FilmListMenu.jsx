import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmListMenu extends Component {
  render() {
    return (
      <div>
        <p>Films by {this.props.genreName} genre</p>
        <p>{this.props.resultLength} movies found</p>
        {this.props.filmSorting}
      </div>
    );
  }
}

FilmListMenu.propTypes = {
  filmSorting: PropTypes.element,
  genreName: PropTypes.string,
  resultLength: PropTypes.number,
};

export default FilmListMenu;
