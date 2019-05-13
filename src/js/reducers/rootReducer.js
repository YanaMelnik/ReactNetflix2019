function reduce(state, action) {
  switch (action.type) {
    case 'SEARCH_FILM_BY':
      return {
        ...state,
        filterBy: action.payload.filterBy,
        filterText: action.payload.text,
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.payload.text,
      };
    case 'FILMS_LOAD_COMPLETE':
      return {
        ...state,
        filmsList: action.payload,
      };
    case 'FILM_LOAD_COMPLETE':
      return {
        ...state,
        selectedFilm: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = reduce;
export default rootReducer;
