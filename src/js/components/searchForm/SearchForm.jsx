import React from 'react';
import Logo from '../common/logo/Logo.jsx';
import Button from '../common/button/Button.jsx';

const SearchForm = () => <div>
    <Logo/>
    <form>
      <label
        htmlFor='search-film__name'
        className='search-film__name-title'>
        Find your movie
      </label>

      <input
        id='search-film__name'
        className='search-film__name-input'/>

      <span className='search__by'>
            <span>Seach by</span>
            <span>
              <input name='search__by' type='radio' value='title' checked/>
              Title
            </span>
            <span>
              <input name='search__by' type='radio' value='gender'/>
              Gender
            </span>
          </span>
      <Button name='Search' action='' sizeBig={true}/>
    </form>
  </div>;

export default SearchForm;
