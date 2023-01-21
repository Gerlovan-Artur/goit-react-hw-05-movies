import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../getMovies';
import { Info } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId))
      .then(reviews => setReviews(reviews.data.results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {error && 'Something wrong, please reload the page...'}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <Info>There is no reviews yet...</Info>
      )}
    </>
  );
};

export default Reviews;