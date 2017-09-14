import * as React from 'react';
import Head from 'react-helmet';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Page from '../layouts/Page';

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

const DefaultHomeMeta = () => {
    return (
    <Head>
      <title>Loading</title>
      <meta name="description" content="Katarzyna Niedziela Portfolio" />
    </Head>
    );
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 8 * 6,
        backgroundImage: 'url(\'/assets/panel1.jpg\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: 800,
        marginRight: 0,
        marginLeft: 0
    },
    paper: {
        padding: 24,
        textAlign: 'center',
        color: theme.palette.text.primary,
        opacity: 0.8
    },
    body: {
        paddingTop: 8 * 24,
        marginTop: 8 * 15,
        marginBottom: 8 * 6,
        color: 'white',
        fontSize: 24
    }
});


let HomeContent = (props) => {
    const { classes } = props;
    const nodes = props.pages.node.list;
    const homeNode = nodes.find(n => n.id === 'pages\\index');
    const body = homeNode.body;
    return (
        <Grid item xs={12} justify='center' className={classes.row}>
            <Head>
                <title>{homeNode.title}</title>
                <meta name="description" content={homeNode.title} />
            </Head>
            <Grid container xs={12} className={classes.root} justify='center'>
                <Grid item xs={11} md={8} className={classes.body}>
                    <BodyRenderer>{body}</BodyRenderer>
                </Grid>
            </Grid>
        </Grid>
    );
};

HomeContent = withStyles(styles)(HomeContent);

const Home = (props) => {
    const { isLoading } = props;
    const notReady = isLoading || props.pages.node === null;
    const content = notReady ? 'Loading...' : <HomeContent {...props}/>;
    return (
	<Page>
		<DefaultHomeMeta/>
		{content}
	</Page>
    );
};

const HomeContainer = createContainer(Home, props => {
    return {
        pages: query({ path: 'pages' })
    };
});


export default HomeContainer;
