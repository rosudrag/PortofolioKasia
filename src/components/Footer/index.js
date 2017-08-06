import React from 'react';
import asMainComponent from '../../common/asMainComponent';

import styles from './index.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      <a href={'http://rosudrag.github.io/'} className={styles.phenomicReference}>
        {'Created by '}
        <span className={styles.phenomicReferenceName}>
          {'DRR'}
        </span>
      </a>
    </p>
  </footer>
);

export default asMainComponent(Footer);
