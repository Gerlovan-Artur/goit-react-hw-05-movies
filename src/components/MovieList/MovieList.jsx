import { useLocation } from 'react-router-dom';
import { MovieItem } from './MovieItem/MovieItem';
import { List } from './MovieList.styled';
import PropTypes from 'prop-types';

export function MovieList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return <MovieItem movie={movie} location={location} key={movie.id} />;
      })}
    </List>
  );
}

MovieList.propTypes = {
  movies: PropTypes.object,
};