import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmElement from './filmElement/FilmElement.jsx';
import './FilmList.css';

class FilmList extends Component {
  render() {
    return (
      <div className='wrapper film-list'>
        <FilmElement
          filmName={this.props.filmsArray[0].title}
          yearOfIssue={this.props.filmsArray[0].release_date}
          genre={this.props.filmsArray[0].genres[0]}
          filmPosterUrl={this.props.filmsArray[0].poster_path}/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
        <FilmElement
          filmName='hfhfh'
          yearOfIssue='1998'
          genre='jhfj'
          filmPosterUrl='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'/>
      </div>
    );
  }
}

FilmList.propTypes = {
  filmsArray: PropTypes.array.isRequired,
};

export default FilmList;
