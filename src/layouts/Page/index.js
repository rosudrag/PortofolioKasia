import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import { joinUri } from 'phenomic';

import Navigation from '../../components/Navigation';
import Banner from '../../components/Banner';
import MainBody from '../../components/MainBody';
import asMainComponent from '../../common/asMainComponent';
import { Image } from 'react-bootstrap';

import styles from './index.css';

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
    const { header, isLoading, body, footer, children } = props;
    return (
        <div className={ 'row start-xs ' + styles.wrapper + ' ' + styles.pageContent }>
            { header }
            {/* <div className="row center-xs">
                <div className="col-xs-10 col-md-8" style={{ padding: '0px' }}>
                    <Image src="/assets/background1.jpg" responsive rounded/>
                </div>
            </div> */}

            <MainBody isLoading={isLoading} body={body}/>
            { children }
            { footer }
        </div>
    );
};

const BodyContainerComponent = asMainComponent(BodyContainer);

const Page = (props, metadata) => {
    const { __filename, __url, head } = props;
    const { metadata: { pkg } } = metadata;

    warning(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`);

    const metaTitle = head.metaTitle ? head.metaTitle : head.title;

    const meta = constructMeta({ head, __url, pkg });

    return (
    <div className={ styles.page }>
      <Helmet title={ metaTitle } meta={ meta } />
      <Banner head={head}/>
      <Navigation/>
      <BodyContainerComponent {...props}/>
    </div>
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
