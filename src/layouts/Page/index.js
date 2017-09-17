import Head from 'react-helmet';
import React from 'react';
import { createMuiTheme } from 'material-ui/styles';
import NavBar from '../../NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import { red, blue, teal } from 'material-ui/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue, // Purple and green play nicely together.
        secondary: teal,
        error: red
    }
});

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Head>
        <html lang="en" />
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        <link rel="icon" type="image/png" href="favicon.png"/>
      </Head>
      <NavBar/>
      <span className="background"></span>
      {children}
      <footer>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; Copyright 2017 DRR</p>
          </div>
        </div>
        </footer>
    </div>

  </MuiThemeProvider>
);

export default Layout;
