import { AuthorText, Review } from './ReviewItem.styled';
import PropTypes from 'prop-types';

export function ReviewItem({ review: { author, content } }) {
  return (
    <li>
      <AuthorText>Author: {author}</AuthorText>
      <Review>``{content}``</Review>
    </li>
  );
}

ReviewItem.propTypes = {
  review: PropTypes.object,
};