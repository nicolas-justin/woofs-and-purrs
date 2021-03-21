import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const wrapperModifier = {
  h1: (theme) => css`
    font-size: ${theme.font.size.xxlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.huge};
    `}
  `,

  h2: (theme) => css`
    font-size: ${theme.font.size.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.xxlarge};
    `}
  `,

  h3: (theme) => css`
    font-size: ${theme.font.size.large};
  `,
};

export const Wrapper = styled.h1`
  ${({ theme, type, color }) => css`
    font-family: ${theme.font.family.changaOne};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.colors[color]};
    line-height: 1;
    margin: 0;

    ${wrapperModifier[type](theme)};
  `}
`;
