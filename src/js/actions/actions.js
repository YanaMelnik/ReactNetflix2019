export function searchFilmBy(text, filterBy) {
  return {
    type: 'SEARCH_FILM_BY',
    payload: {
      text, filterBy,
    },
  };
}

export function sortBy(text) {
  return {
    type: 'SORT_BY',
    payload: {
      text,
    },
  };
}

export function loadAllFilms() {
  return (dispatch) => {
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then(res => res.json())
      .then(res => dispatch({ type: 'FILMS_LOAD_COMPLETE', payload: res.data }));
  };
}

export function loadSelectedFilm(id) {
  return (dispatch) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then(res => res.json())
      .then(res => dispatch({ type: 'FILM_LOAD_COMPLETE', payload: res }));
  };
}
