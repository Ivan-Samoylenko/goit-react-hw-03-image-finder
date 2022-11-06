import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      {children}
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
