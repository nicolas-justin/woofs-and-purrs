import styled, { css } from 'styled-components';

const wrapperModifiers = {
  large: () => css`
    width: 5rem;
    height: 5rem;
  `,

  white: (theme) => css`
    svg path.cat,
    svg path.purrs {
      fill: ${theme.colors.white};
    }
  `,

  withLabel: () => css`
    width: 100%;

    svg path.woofs,
    svg path.purrs {
      display: unset;
      pointer-events: unset;
    }
  `,
};

export const Wrapper = styled.div`
  ${({ theme, large, white, withLabel }) => css`
    overflow: hidden;
    width: 4rem;
    height: 4rem;

    svg {
      height: 100%;
      fill: none;

      path.heart {
        fill: ${theme.colors.primary};
      }

      path.cat {
        fill: ${theme.colors.secondary};
      }

      path.woofs {
        display: none;
        fill: ${theme.colors.primary};
        pointer-events: none;
      }

      path.purrs {
        display: none;
        fill: ${theme.colors.secondary};
        pointer-events: none;
      }
    }

    ${large && wrapperModifiers['large']}
    ${white && wrapperModifiers['white'](theme)}
    ${withLabel && wrapperModifiers['withLabel']}
  `}
`;
