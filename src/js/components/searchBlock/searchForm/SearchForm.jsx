import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../common/logo/Logo';

import Button from '../../common/button/Button';
import './SearchForm.css';
import { searchFilmBy } from '../../../actions/actions';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
    this.searchByTitleRef = React.createRef();
    this.searchByGenreRef = React.createRef();
  }

  doSearch() {
    const text = this.textRef.current.value;
    const searchByTitle = !!this.searchByTitleRef.current.checked;
    this.props.searchFilmCallback(text, searchByTitle ? 'title' : 'genre');
  }

  render() {
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
        <input className='search-by__input' id='search-by__title' name='search-by' type='radio' value='title' checked
               ref={this.searchByTitleRef}/>
        <label className='search-by__label' htmlFor='search-by__title'>
          Title
        </label>

        <input className='search-by__input' id='search-by__gender' name='search-by' type='radio' value='gender'
               ref={this.searchByGenreRef}/>
        <label className='search-by__label' htmlFor='search-by__gender'>
          Gender
        </label>
        </span>
          <Button text='Search' action={() => this.doSearch()}/>
        </div>
      </form>
    </div>;
  }
}

SearchForm.propTypes = {
  searchFilmCallback: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  searchFilmCallback: (text, type) => (dispatch(searchFilmBy(text, type))),
});


export default connect(null, mapDispatchToProps)(SearchForm);
