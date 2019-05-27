import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmDetails from '../filmDetails/FilmDetails';
import FilmListMenu from '../filmListMenu/FilmListMenu';
import FilmList from '../filmList/FilmList';
import Footer from '../common/footer/Footer';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';
import { loadAllFilms, loadSelectedFilm } from '../../actions/actions';
import movieSortStrategy from '../../utils/sorting';
import movieFilterStrategy from '../../utils/filtering';

class MoviePage extends Component {
  componentDidMount() {
    this.props.requestSelectedFilm(447365);
    this.props.requestFilmsList();
  }

  render() {
    if (!this.props.selectedFilm) {
      return <div>Loading</div>;
    }
    return <ErrorBoundary>
      <FilmDetails
        filmName={this.props.selectedFilm.title}
        url={this.props.selectedFilm.poster_path}
        rate={this.props.selectedFilm.vote_average}
        shortDescription={this.props.selectedFilm.tagline}
        yearOfIssue={this.props.selectedFilm.release_date.slice(0, 4)}
        duration={this.props.selectedFilm.runtime}
        longDescriptions={this.props.selectedFilm.overview}/>
      <FilmListMenu className='film-list-menu' genreName={this.props.selectedFilm.genres[0]} filmSorting={false}/>
      <FilmList
        filmsArray={this.props.filmsList}
        sortComparator={this.props.sortComparator}
        filterFunc={movieFilterStrategy(this.props.selectedFilm.genres[0], 'genre')}
      />
      <Footer/>
    </ErrorBoundary>;
  }
}

MoviePage.propTypes = {
  requestFilmsList: PropTypes.func.isRequired,
  requestSelectedFilm: PropTypes.func.isRequired,
  filmsList: PropTypes.array.isRequired,
  selectedFilm: PropTypes.any,
  sortComparator: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestSelectedFilm: id => dispatch(loadSelectedFilm(id)),
  requestFilmsList: () => dispatch(loadAllFilms()),
});

const mapStateToProps = state => ({
  filmsList: state.filmsList,
  sortComparator: movieSortStrategy(state.sortBy),
  selectedFilm: state.selectedFilm,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
