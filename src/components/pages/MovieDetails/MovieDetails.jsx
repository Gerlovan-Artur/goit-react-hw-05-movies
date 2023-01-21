import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'components/getMovies';
import { BASE_IMG_URL } from 'components/MovieList/MovieItem/MovieItem';
import { useState, useEffect, Suspense } from 'react';
import {
  Image,
  Description,
  OverviewText,
  Title,
  Wrapper,
  Year,
  Genres,
  LinkWrapper,
  Additional,
  BackLink,
} from './MovieDetails.styled';
import { MyLink } from './MovieDetails.styled';
import { FaArrowLeft } from 'react-icons/fa';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(Number(movieId))
      .then(movie => setMovie(movie.data))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {error && 'Something wrong, reload the page...'}
      {movie && (
        <Wrapper>
          <BackLink to={backLink}>
            <FaArrowLeft />
            Back to movies
          </BackLink>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <Image
              src={
                movie.poster_path
                  ? `${BASE_IMG_URL}` + movie.poster_path
                  : 'https://static4.depositphotos.com/1000899/361/i/450/depositphotos_3613093-stock-photo-shall-find.jpg'
              }
              alt={movie.title || movie.name}
            />
            <div style={{ padding: '30px 0' }}>
              <Title>{movie.title || movie.name}</Title>
              <Year>({movie.release_date})</Year>
              <Description>Overview</Description>
              <OverviewText>{movie.overview}</OverviewText>
              <Description>Genres</Description>
              <Genres>
                {movie.genres
                  .map(genre => {
                    return genre.name;
                  })
                  .join(', ')}
              </Genres>
            </div>
          </div>
          <LinkWrapper>
            <Additional>Additional information</Additional>
            <MyLink to="cast">Cast</MyLink>
            <MyLink to="reviews">Reviews</MyLink>
          </LinkWrapper>
        </Wrapper>
      )}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;