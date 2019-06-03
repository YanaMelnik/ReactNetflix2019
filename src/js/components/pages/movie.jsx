import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    this.props.requestSelectedFilm(this.props.id);
    this.props.requestFilmsList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.requestSelectedFilm(nextProps.id);
    }
  }

  render() {
    if (!this.props.selectedFilm) {
      return <div>Loading</div>;
    }
    const FilmListArray = this.props.filmsList.length
      ? (<FilmList
        filmsArray={this.props.filmsList}
        sortComparator={this.props.sortComparator}
        filterFunc={movieFilterStrategy(this.props.selectedFilm.genres[0], 'genre')}
      />)
      : (<FilmList/>);
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
      {FilmListArray}
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
  match: PropTypes.object.isRequired,
  id: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  requestSelectedFilm: id => dispatch(loadSelectedFilm(id)),
  requestFilmsList: () => dispatch(loadAllFilms()),
});

const mapStateToProps = (state, ownProps) => ({
  filmsList: state.filmsList,
  sortComparator: movieSortStrategy(state.sortBy),
  selectedFilm: state.selectedFilm,
  id: ownProps.match.params.id,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));
