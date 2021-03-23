import styled, { css } from 'styled-components';

const wrapperModifiers = {
  secondary: (theme) => css`
    background: ${theme.colors.secondary};
  `,

  iconSide: (theme) => css`
    flex-direction: row-reverse;

    span {
      margin-left: 0;
      margin-right: ${theme.spacings.small};
    }
  `,
};

export const Wrapper = styled.button`
  ${({ theme, iconSide, secondary }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.normal};
    border-radius: 999em;
    outline: 0;
    border: 0;
    white-space: nowrap;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    -webkit-tap-highlight-color: transparent;

    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 1.5em;
      margin-right: 0;
      margin-left: ${theme.spacings.small};
    }

    ${secondary && wrapperModifiers['secondary'](theme)}
    ${iconSide === 'left' && wrapperModifiers['iconSide'](theme)}
  `}
`;
