import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmListElement from './filmListElement/FilmListElement';

import './FilmList.css';

class FilmList extends Component {
  render() {
    return (
      <div className='wrapper film-list'>
        {this.props.filmsArray.map(elem => <FilmListElement
                key={elem.id}
                filmName={elem.title}
                yearOfIssue={elem.release_date}
                genre={elem.genres[0]}
                filmPosterUrl={elem.poster_path}/>)}
      </div>
    );
  }
}

FilmList.propTypes = {
  filmsArray: PropTypes.array.isRequired,
};

export default FilmList;
