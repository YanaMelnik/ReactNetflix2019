function extractReleaseDate(film) {
  const dateArray = film.release_date.split('-');
  return new Date(+dateArray[0], +dateArray[1], +dateArray[2]);
}

function compareFilmsByDate(film1, film2) {
  return extractReleaseDate(film1).getTime() - extractReleaseDate(film2).getTime();
}

function compareFilmsByRating(film1, film2) {
  return film1.vote_average - film2.vote_average;
}

export default function movieSortStrategy(sortBy) {
  switch (sortBy) {
    case 'release_date':
      return compareFilmsByDate;
    case 'rating':
      return compareFilmsByRating;
    default:
      return compareFilmsByDate;
  }
}
