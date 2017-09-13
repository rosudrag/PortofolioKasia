import Head from 'react-helmet';
import React from 'react';
import { createMuiTheme } from 'material-ui/styles';
import NavBar from '../../NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import { red, blue, teal } from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import './styles.css';

const theme = createMuiTheme({
    palette: {
        primary: blue, // Purple and green play nicely together.
        secondary: teal,
        error: red
    }
});

const styles = aTheme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: aTheme.palette.text.secondary
    }
});


const Layout = ({ children, classes }) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <NavBar/>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.paper}>{children}</div>
          </Grid>
        </Grid>
      </div>
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(Layout);
