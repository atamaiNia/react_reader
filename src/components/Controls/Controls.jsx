import PropTypes from 'prop-types';
import { Button, BtnText, BtnWrapper } from './Controls.styled';

export const Controls = ({ current, total, onClickPrev, onClickNext }) => {
  return (
    <BtnWrapper>
      <Button type="button" onClick={onClickPrev} disabled={current === 1}>
        <BtnText>Назад</BtnText>
      </Button>
      <Button type="button" onClick={onClickNext} disabled={current === total}>
        <BtnText>Вперед</BtnText>
      </Button>
    </BtnWrapper>
  );
};

Controls.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};
