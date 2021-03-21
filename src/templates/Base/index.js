import PropTypes from 'prop-types';

import Menu from 'components/Menu';

import * as S from './styles';

function Base({ children }) {
  return (
    <S.Wrapper>
      <Menu />

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
