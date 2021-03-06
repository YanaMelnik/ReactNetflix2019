import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmListElement from './filmListElement/FilmListElement';

import './FilmList.css';

function filmMapCallback(elem) {
  return <FilmListElement
    key={elem.id}
    filmName={elem.title}
    yearOfIssue={elem.release_date}
    genre={elem.genres[0]}
    filmPosterUrl={elem.poster_path}/>;
}

class FilmList extends Component {
  render() {
    const filmListArray = this.props.filmsArray.length
      ? this.props.filmsArray.map(filmMapCallback)
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
};

FilmList.defaultProps = {
  filmsArray: [],
};

export default FilmList;
