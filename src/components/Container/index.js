import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    padding: 0 ${theme.grid.gutter};
    margin: 0 auto;
  `};
`;

export default Wrapper;
