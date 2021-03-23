import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xhuge} 0;
    background: ${theme.colors.ice};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    gap: ${theme.spacings.huge};
  `}

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const Image = styled.div`
  pointer-events: none;
  flex: 1;

  img {
    display: block;
    max-width: 24rem;
    width: 100%;
    margin: 0 auto;

    ${media.greaterThan('medium')`
      max-width: 32rem;
    `}
  }
`;

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    align-items: flex-start;
    flex: 1;

    strong {
      font-family: ${theme.font.family.changaOne};
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.size.large};
      color: ${theme.colors.black};
    }

    p {
      margin-bottom: ${theme.spacings.large};
    }
  `};
`;
