import PropTypes from 'prop-types';

import * as S from './styles';

function Container({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
