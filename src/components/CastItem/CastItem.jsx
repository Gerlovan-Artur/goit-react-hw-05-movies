import { Image, Item, Text } from './CastItem.styled';
import PropTypes from 'prop-types';

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function CastItem({ actor: { profile_path, name, character } }) {
  return (
    <>
      {profile_path && (
        <Item>
          <Image src={`${BASE_IMG_URL}` + profile_path} alt={name} />
          <Text style={{ fontSize: '20px' }}>{name}</Text>
          <Text>Character: {character}</Text>
        </Item>
      )}
    </>
  );
}


CastItem.propTypes = {
  actor: PropTypes.shape({
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
   };