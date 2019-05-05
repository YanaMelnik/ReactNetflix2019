import React from 'react';
import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';

import './SearchForm.css';

const SearchForm = () => <div>
    <Logo/>
    <form className='wrapper'>
      <label
        htmlFor='search-film__name'
        className='search-film__name-title'>
        Find your movie
      </label>

      <input
        id='search-film__name'
        className='search-film__name-input'/>

      <div className='search-by__action-block'>
        <span className='search-by'>
        <span className='search-by__title'>Seach by</span>
        <input className='search-by__input' id='search-by__title' name='search-by' type='radio' value='title' checked/>
        <label className='search-by__label' htmlFor='search-by__title'>
          Title
        </label>

        <input className='search-by__input' id='search-by__gender' name='search-by' type='radio' value='gender'/>
        <label className='search-by__label' htmlFor='search-by__gender'>
          Gender
        </label>
        </span>
        <Button text='Search' action=''/>
      </div>
    </form>
  </div>;

export default SearchForm;
