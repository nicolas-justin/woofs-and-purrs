import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding-top: 8.75rem;
    background: linear-gradient(
      45deg,
      ${theme.colors.paco},
      ${theme.colors.charcoal},
      ${theme.colors.revolver}
    );
  `}

  ${media.greaterThan('medium')`
    background: url('/img/home-hero-section.jpg') top left / cover no-repeat;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
  `}

  ${media.greaterThan('large')`
    max-width: 50%;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Phone = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.changaOne};
    font-size: ${theme.font.size.large};
    color: ${theme.colors.primary};
  `}
`;
