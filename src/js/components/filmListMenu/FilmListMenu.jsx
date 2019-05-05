import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FilmListMenu.css';

class FilmListMenu extends Component {
  render() {
    let contentElement;
    if (this.props.genreName) {
      contentElement = `Films by ${this.props.genreName} genre`;
    } else if (this.props.resultLength) {
      contentElement = `${this.props.resultLength} movies found`;
    }

    return (
      <div className='film-list-menu'>
        <div className='wrapper film-list-menu__wrapper'>
          <span className='film-list-menu__left'>
            { contentElement }
          </span>

          <span className='film-list-menu__right'>
            {this.props.filmSorting}
          </span>
        </div>
      </div>
    );
  }
}

FilmListMenu.propTypes = {
  filmSorting: PropTypes.element,
  genreName: PropTypes.string,
  resultLength: PropTypes.string,
};

export default FilmListMenu;
