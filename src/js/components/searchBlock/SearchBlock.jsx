import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './searchForm/SearchForm';

import './SearchBlock.css';

class SearchBlock extends Component {
  render() {
    return <div className='search-film__block'>
      <SearchForm searchBy={this.props.searchBy}/>
    </div>;
  }
}

SearchBlock.propTypes = {
  searchBy: PropTypes.string.isRequired,
};

export default SearchBlock;
