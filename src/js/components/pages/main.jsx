import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllFilms } from '../../actions/actions';
import FilmListMenu from '../filmListMenu/FilmListMenu';
import FilmList from '../filmList/FilmList';
import Footer from '../common/footer/Footer';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';
import SearchBlock from '../searchBlock/SearchBlock';
import movieSortStrategy from '../../utils/sorting';
import movieFilterStrategy from '../../utils/filtering';

class MainPage extends Component {
  componentDidMount() {
    this.props.requestFilmsList();
  }

  render() {
    return <ErrorBoundary>
      <SearchBlock searchBy={this.props.searchBy}/>
      <FilmListMenu className='film-list-menu' resultLength={this.props.filmsList.length} filmSorting={true}/>
      <FilmList
        filmsArray={this.props.filmsList}
        sortComparator={this.props.sortComparator}
        filterFunc={this.props.filterFunc}
      />
      <Footer/>
    </ErrorBoundary>;
  }
}

MainPage.propTypes = {
  requestFilmsList: PropTypes.func.isRequired,
  filmsList: PropTypes.array.isRequired,
  sortComparator: PropTypes.func.isRequired,
  filterFunc: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestFilmsList: () => dispatch(loadAllFilms()),
});

const mapStateToProps = (state, ownProps) => {
  const query = new URLSearchParams(ownProps.location.search);
  return ({
    filmsList: state.filmsList,
    sortComparator: movieSortStrategy(state.sortBy),
    filterFunc: movieFilterStrategy(query.get('text'), query.get('searchBy')),
    searchBy: query.get('searchBy'),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
