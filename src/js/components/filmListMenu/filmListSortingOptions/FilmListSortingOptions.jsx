import React from 'react';

const FilmListSortingOptions = () => <form>
        <span>Sort by</span>
        <span>
            <input name='sort__by' type='radio' value='date'/>
            release date
        </span>
        <span>
            <input name='sort__by' type='radio' value='rating' checked/>
            rating
        </span>
    </form>;
export default FilmListSortingOptions;
