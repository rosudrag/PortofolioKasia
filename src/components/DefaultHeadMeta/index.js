import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const DefaultHeadMeta = (props, metadataProps) => {
    const { metadata: { pkg } } = metadataProps;
    const generator = { name: 'generator', content: `${ process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }` };
    const siteName = { property: 'og:site_name', content: pkg.name };
    const twitter = { name: 'twitter:site', content: `@${ pkg.twitter }` };
    const otherMeta = { ...props.meta ? props.meta : [] };
    const meta = [generator, siteName, twitter, otherMeta];
    const script = [
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
        ...props.scripts ? props.scripts : []
    ];

    const viewPortMeta = [{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }];

    return (
      <div hidden>
        <Helmet meta={ meta } script={ script } />
        <Helmet meta={ viewPortMeta } />

        <style>{ '@-ms-viewport { width: device-width; }' }</style>
    </div>
    );
};

DefaultHeadMeta.propTypes = {
    meta: React.PropTypes.arrayOf(React.PropTypes.object),
    scripts: React.PropTypes.arrayOf(React.PropTypes.object)
};

DefaultHeadMeta.contextTypes = {
    metadata: PropTypes.object.isRequired
};

export default DefaultHeadMeta;
