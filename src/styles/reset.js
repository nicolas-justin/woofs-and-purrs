import { css } from 'styled-components';

export default css`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-size: ${theme.font.size.root};
    }

    body {
      line-height: 1.5;
      scroll-behavior: smooth;
      overscroll-behavior: contain;
      text-rendering: optimizeLegibility;
      color: ${theme.colors.secondary};
      font-family: ${theme.font.family};
      font-size: ${theme.font.size.body};
      font-weight: ${theme.font.weight.normal};
      background: ${theme.colors.white};
    }

    a,
    input,
    button,
    select,
    textarea {
      color: inherit;
      font-size: inherit;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
    }

    a[href] {
      text-decoration-line: none;
    }

    a[href],
    button {
      cursor: pointer;
    }
  `}
`;
