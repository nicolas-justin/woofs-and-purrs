import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import BaseTemplate from 'templates/Base';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyles />

      <BaseTemplate>
        <Component {...pageProps} />
      </BaseTemplate>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
