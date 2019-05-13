function stringContains(source, search) {
  return source.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}

function filterByTitle(text) {
  return ({ title }) => stringContains(title, text);
}

function filterByGenre(text) {
  return ({ genres }) => genres.filter(genre => stringContains(genre, text)).length > 0;
}

export default function movieFilterStrategy(filterText, filterBy) {
  switch (filterBy) {
    case 'genre':
      return filterByGenre(filterText);
    case 'title':
      return filterByTitle(filterText);
    default:
      return () => true;
  }
}
