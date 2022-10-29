import PropTypes from 'prop-types';
import { Title, Text } from './Publication.styled';

export const Publication = ({ item }) => {
  return (
    <article>
      <Title>{item.title}</Title>
      <Text>{item.text}</Text>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.object.isRequired,
};
