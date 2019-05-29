import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';
import './SearchForm.css';
import { loadAllFilms, searchFilmBy } from '../../../actions/actions';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
    this.searchByTitleRef = React.createRef();
    this.searchByGenreRef = React.createRef();
    this.state = {
      searchBy: props.searchBy,
    };
  }

  doSearch(e) {
    this.props.history.push(`/search?text=${this.textRef.current.value}
      &searchBy=${this.searchByTitleRef.current.checked ? 'title' : 'genre'}`);
    this.props.requestFilmsList();
    const text = this.textRef.current.value;
    const searchByTitle = !!this.searchByTitleRef.current.checked;
    this.props.searchFilmCallback(text, searchByTitle ? 'title' : 'genre');
  }

  render() {
    const titleChecked = this.state.searchBy === 'title';
    const genreChecked = this.state.searchBy === 'genre';
    return <div>
      <Logo/>
      <form className='wrapper'>
        <label
          htmlFor='search-film__name'
          className='search-film__name-title'>
          Find your movie
        </label>

        <input
          id='search-film__name'
          className='search-film__name-input'
          ref={this.textRef}/>

        <div className='search-by__action-block'>
        <span className='search-by'>
        <span className='search-by__title'>Search by</span>
        <input className='search-by__input'
               id='search-by__title'
               name='search-by'
               type='radio'
               value='title'
               checked={titleChecked}
               ref={this.searchByTitleRef}
               onClick={() => this.setState({ searchBy: 'title' })}
        />
        <label className='search-by__label' htmlFor='search-by__title'>
          Title
        </label>

        <input className='search-by__input'
               id='search-by__gender'
               name='search-by'
               type='radio'
               value='gender'
               ref={this.searchByGenreRef}
               checked={genreChecked}
               onClick={() => this.setState({ searchBy: 'genre' })}
        />
        <label className='search-by__label' htmlFor='search-by__gender'>
          Gender
        </label>
        </span>
            <Button text='Search' action={e => this.doSearch(e)}/>
        </div>
      </form>
    </div>;
  }
}

SearchForm.propTypes = {
  requestFilmsList: PropTypes.func.isRequired,
  searchFilmCallback: PropTypes.func.isRequired,
  history: PropTypes.object,
  searchBy: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestFilmsList: () => dispatch(loadAllFilms()),
  searchFilmCallback: (text, type) => (dispatch(searchFilmBy(text, type))),
});


export default connect(null, mapDispatchToProps)(withRouter(SearchForm));
