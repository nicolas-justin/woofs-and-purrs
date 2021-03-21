import styled, { css } from 'styled-components';

import Container from 'components/Container';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${theme.layers.menu};
    padding: ${theme.spacings.small} 0;
    user-select: none;

    ${Container} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 4rem;
    width: 4rem;
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};
    text-transform: capitalize;
    white-space: nowrap;
    text-align: center;
    -webkit-user-drag: none;

    &.active {
      color: ${theme.colors.primary};
    }
  `}
`;

export const MenuNav = styled.nav`
  ${({ theme, white }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    ${MenuLink} {
      color: ${white ? theme.colors.white : theme.colors.secondary};
    }
  `}
`;

export const MenuFull = styled.nav`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    opacity: ${isOpen ? 1 : 0};
    gap: ${theme.spacings.xsmall};
    z-index: ${theme.layers.menu};
    padding: ${theme.spacings.normal};
    background-color: ${theme.colors.ice};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transform: translateY(${isOpen ? '0' : '3rem'});
    transition: opacity ${theme.transitions.faster},
      transform ${theme.transitions.faster};

    ${IconWrapper} {
      position: absolute;
      right: ${theme.spacings.normal};
      top: ${theme.spacings.normal};
      color: ${theme.colors.secondary};
    }
  `}
`;
