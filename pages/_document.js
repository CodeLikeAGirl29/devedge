/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

import React from "react";

/**
 * Renders the Document component.
 */
export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Satisfy&display=optional"
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
