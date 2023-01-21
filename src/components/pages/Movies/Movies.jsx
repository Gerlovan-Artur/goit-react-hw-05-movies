import { Form, Button } from './Movies.styled';

import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getMovieBySearch } from 'components/getMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }

    getMovieBySearch(searchQuery).then(images => {
      if (images.data.results.length === 0) {
        return toast.warn('Please enter another movie name...', {
          autoClose: 3000,
        });
      }
      setMovies(images.data.results);
    });
  }, [searchQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.elements.input.value === '') {
      return toast.warn('Please enter something to search', {
        autoClose: 2000,
      });
    } else setSearchParams({ query: e.currentTarget.elements.input.value });
    e.currentTarget.elements.input.value = '';
    setMovies([]);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie to search..."
          name="input"
        />
        <Button type="submit">
          <p>Search</p>
        </Button>
      </Form>
      <ToastContainer />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;