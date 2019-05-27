import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FilmListMenu.css';
import FilmListSortingOptions from './filmListSortingOptions/FilmListSortingOptions';

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
          {this.props.filmSorting
            ? (
              <span className='film-list-menu__right'>
                <FilmListSortingOptions/>
              </span>
            )
            : null
          }
        </div>
      </div>
    );
  }
}

FilmListMenu.propTypes = {
  filmSorting: PropTypes.bool,
  genreName: PropTypes.string,
  resultLength: PropTypes.string,
};

FilmListMenu.defaultProps = {
  filmSorting: false,
};

export default FilmListMenu;
