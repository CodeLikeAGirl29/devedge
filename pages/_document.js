import { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&family=Oswald:wght@200;300;400;600&family=Playfair+Display:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="css/basic.css" />
                <link rel="shortcut icon" href="images/favicons/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
