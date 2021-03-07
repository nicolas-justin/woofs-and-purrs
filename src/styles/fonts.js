import { css } from 'styled-components';

const BASE_PATH = '/fonts';
const NUNITO_PATH = `${BASE_PATH}/nunito/nunito-v16-latin`;
const CHANGA_ONE_PATH = `${BASE_PATH}/changa-one/changa-one-v13-latin`;

export default css`
  @font-face {
    font-family: 'Nunito';
    font-display: swap;
    font-style: normal;
    font-weight: 300;
    src: local('Nunito Light'), local('Nunito-Light'),
      url('${NUNITO_PATH}-300.woff2') format('woff2'),
      url('${NUNITO_PATH}-300.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Regular'), local('Nunito-Regular'),
      url('${NUNITO_PATH}-regular.woff2') format('woff2'),
      url('${NUNITO_PATH}-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Changa One';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('Changa One Regular'), local('Changa-One-Regular'),
      url('${CHANGA_ONE_PATH}-regular.woff2') format('woff2'),
      url('${CHANGA_ONE_PATH}-regular.woff') format('woff');
  }
`;
