import PropTypes from 'prop-types';

import * as S from './styles';

function Heading({ children, type, color }) {
  return (
    <S.Wrapper as={type} type={type} color={color}>
      {children}
    </S.Wrapper>
  );
}

Heading.defaultProps = {
  color: 'black',
  type: 'h1',
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3']),
  color: PropTypes.oneOf(['black', 'white']),
};

export default Heading;
