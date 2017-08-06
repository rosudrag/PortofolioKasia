import React from 'react';
import { Image } from 'react-bootstrap';
import asMainComponent from '../../common/asMainComponent';

import styles from './index.css';

const Banner = (props) => {
    // const { head } = props;

    return (
      <div style={{ marginTop: '16px' }} className="row center-xs">
        <Image style={{ height: '120px', padding: '16px' }} src="/assets/logo.svg" responsive />
      </div>

    );
};

export default asMainComponent(Banner, styles.banner);
