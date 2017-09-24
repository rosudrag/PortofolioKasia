import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import { joinUri } from 'phenomic';

import { createMuiTheme } from 'material-ui/styles';
import NavBar from '../../NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import { red, blue, teal } from 'material-ui/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: teal,
        error: red
    }
});

const constructMeta = (props) => {
    const { head, __url, pkg } = props;
    const socialImage = head.hero && head.hero.match('://') ? head.hero : joinUri(process.env.PHENOMIC_USER_URL, head.hero);
    const metaTitle = head.metaTitle ? head.metaTitle : head.title;
    return [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
        {
            property: 'og:url',
            content: joinUri(process.env.PHENOMIC_USER_URL, __url)
        },
    { property: 'og:image', content: socialImage },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${ pkg.twitter }` },
    { name: 'twitter:description', content: head.description },
    { name: 'twitter:image', content: socialImage },
    { name: 'description', content: head.description }
    ];
};

const BodyContainer = (props) => {
    const { header, children } = props;
    return (
        <div>
            { header }
            { children }
        </div>
    );
};

const Page = (props, metadata) => {
    const { __filename, __url, head } = props;
    const { metadata: { pkg } } = metadata;

    warning(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`);

    const metaTitle = head.metaTitle ? head.metaTitle : head.title;

    const meta = constructMeta({ head, __url, pkg });

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <Helmet title={ metaTitle } meta={ meta } />
                <NavBar/>
                <span className="background"></span>
                <BodyContainer {...props}/>
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
};

Page.propTypes = {
    children: PropTypes.node,
    isLoading: PropTypes.bool,
    __filename: PropTypes.string,
    __url: PropTypes.string,
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
    header: PropTypes.element,
    footer: PropTypes.element
};

Page.contextTypes = {
    metadata: PropTypes.object.isRequired
};

export default Page;
