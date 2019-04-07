import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmListSortingOptions extends Component {
  render() {
    if (!this.props.filmSorting) {
      return null;
    }

    return (
      <form>
        <span>Sort by</span>
        <span>
            <input name='sort__by' type='radio' value='date'/>
            release date
          </span>
        <span>
            <input name='sort__by' type='radio' value='rating' checked/>
            rating
          </span>
      </form>
    );
  }
}

FilmListSortingOptions.propTypes = {
  filmSorting: PropTypes.bool,
};

export default FilmListSortingOptions;
