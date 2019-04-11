import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmListElement from './filmListElement/FilmListElement.jsx';
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
    const filmListArray = this.props.filmsArray.map(filmMapCallback);
    return (
      <div className='wrapper film-list'>
        {filmListArray}
      </div>
    );
  }
}

FilmList.propTypes = {
  filmsArray: PropTypes.array.isRequired,
};

export default FilmList;
