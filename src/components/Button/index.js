import PropTypes from 'prop-types';

import * as S from './styles';

function Button({ onClick, secondary, withIcon, title, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();

    if (onClick) {
      onClick();
    }
  };

  return (
    <S.Wrapper
      onClick={handleClick}
      secondary={!!secondary}
      iconSide={!!withIcon && withIcon.side}
      {...props}
    >
      {title}
      {!!withIcon && <span>{withIcon.icon}</span>}
    </S.Wrapper>
  );
}

Button.propTypes = {
  withIcon: PropTypes.shape({
    side: PropTypes.oneOf(['left', 'right']).isRequired,
    icon: PropTypes.node.isRequired,
  }),
  title: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
