import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmListElement from './filmListElement/FilmListElement';

import './FilmList.css';
import movieFilterStrategy from '../../utils/filtering';

function filmMapCallback(elem) {
  return <FilmListElement
    key={elem.id}
    filmName={elem.title}
    yearOfIssue={elem.release_date.slice(0, 4)}
    genre={elem.genres[0]}
    filmPosterUrl={elem.poster_path}/>;
}

class FilmList extends Component {
  render() {
    const filmsFiltered = this.props.filmsArray
      .sort(this.props.sortComparator)
      .filter(this.props.filterFunc);
    const filmListArray = filmsFiltered.length
      ? filmsFiltered.map(filmMapCallback)
      : <div className={'no_content'}>No films found</div>;
    return (
        <div className='wrapper film-list'>
            {filmListArray}
        </div>
    );
  }
}
FilmList.propTypes = {
  filmsArray: PropTypes.array,
  sortComparator: PropTypes.func,
  filterFunc: PropTypes.func,
};

export default FilmList;
