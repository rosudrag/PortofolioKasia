import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import { BodyContainer, joinUri, Link } from 'phenomic';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Header from '../../components/Header';

import styles from './index.css';

const Hero = (props) => {
    const { head } = props;

    const heroStyle = {
        backgroundImage: `url(${ head.hero })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
    };
    return (
    <div
      className={ styles.hero }
      style={ head.hero && heroStyle }>
      <div className={ styles.header }>
        <div className={ styles.wrapper }>
          {
            head.cta &&
            <Link to={ head.cta.link }>
              <Button className={ styles.cta } light { ...head.cta.props }>
                { head.cta.label }
              </Button>
            </Link>
          }
        </div>
      </div>
    </div>
    );
};


const Page = (props, metadata) => {
    const {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children
  } = props;
    const { metadata: { pkg } } = metadata;

    warning(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`);

    const metaTitle = head.metaTitle ? head.metaTitle : head.title;

    const socialImage = head.hero && head.hero.match('://') ? head.hero : joinUri(process.env.PHENOMIC_USER_URL, head.hero);

    const meta = [
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

    const content = isLoading ? <Loading />
            : <BodyContainer>
                { body }
              </BodyContainer>;
    return (
    <div className={ styles.page }>
      <Helmet title={ metaTitle } meta={ meta } />
      <Hero head={head}/>
      <div className={ styles.wrapper + ' ' + styles.pageContent }>
        <Header/>
        { header }
        <div className={ styles.body }>
          {content}
        </div>
        { children }
        { footer }
      </div>
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
