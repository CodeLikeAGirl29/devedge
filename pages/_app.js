import Head from 'next/head';
import { Fragment } from 'react';
// font awesome imports
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
/**
 * MyApp function component.
 * @param {AppProps} props - The props for the component.
 * @returns {ReactElement} The rendered component.
 */
const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head>
                <title>Cvio - Resume/CV React NextJS Template</title>
                <link rel="shortcut icon" href="images/favicons/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
};

export default MyApp;
