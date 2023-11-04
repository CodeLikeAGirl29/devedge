import Head from 'next/head';
import { Fragment } from 'react';
// font awesome imports
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Cvio - Resume/CV React NextJS Template</title>

        <link
          href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic'
          rel='stylesheet'
        />

        <link rel='stylesheet' href='css/basic.css' />

        <link rel='shortcut icon' href='images/favicons/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
