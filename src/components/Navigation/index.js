import React, { PropTypes } from 'react';
import { Link } from 'phenomic';
import asMainComponent from '../../common/asMainComponent';

import styles from './index.css';

const CVLink = () => <a className={ styles.link } target="_blank" href = {'/assets/CV/cv.pdf'}>CV</a>;

const Navigation = (props, { metadata: { pkg } }) => (
  <div className={'row start-xs ' + styles.navContainer}>
    <header className={ styles.header }>
      <nav className={ styles.nav }>
        <div className={ styles.navPart1 }>
          <Link className={ styles.link } to={ '/' }>
            { 'Home' }
          </Link>
          <Link className={ styles.link } to={ '/music' }>
            { 'Music' }
          </Link>
          <CVLink/>
        </div>
      </nav>
    </header>
  </div>
);

Navigation.contextTypes = {
    metadata: PropTypes.object.isRequired
};

export default asMainComponent(Navigation);
