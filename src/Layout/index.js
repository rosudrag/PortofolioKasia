import * as React from 'react';
import Head from 'react-helmet';

import './styles.css';

const Layout = ({ children }) => (
  <div>
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
    </Head>
	<div>
		{children}
	</div>
  </div>
);

export default Layout;