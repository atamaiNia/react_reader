import PropTypes from 'prop-types';
import { StyledProgress } from './Progress.styled';

export const Progress = ({ current, total }) => {
  return (
    <StyledProgress>
      {current}/{total}
    </StyledProgress>
  );
};

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
