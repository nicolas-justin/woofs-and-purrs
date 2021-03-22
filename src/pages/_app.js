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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#38383a" />
        <meta name="msapplication-TileColor" content="#38383a" />
        <meta name="theme-color" content="#38383a" />
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
