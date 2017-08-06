import React, { PropTypes } from 'react';
import { Link } from 'phenomic';
import Svg from 'react-svg-inline';

import twitterSvg from '../icons/iconmonstr-twitter-1.svg';
import gitHubSvg from '../icons/iconmonstr-github-1.svg';
import asMainComponent from '../../common/asMainComponent';

import styles from './index.css';

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
          <a className={ styles.link } target="_blank" href = {'/assets/CV/cv.pdf'}>CV</a>
        </div>
        <div className={ styles.navPart2 }>
          {
            pkg.twitter &&
            <a
              href={ `https://twitter.com/${pkg.twitter}` }
              className={ styles.link }
            >
              <Svg svg={ twitterSvg } cleanup />
              { 'Twitter' }
            </a>
          }
          {
            pkg.repository &&
            <a
              href={ pkg.repository }
              className={ styles.link }
            >
              <Svg svg={ gitHubSvg } cleanup />
              { 'GitHub' }
            </a>
          }
        </div>
      </nav>
    </header>
  </div>
);

Navigation.contextTypes = {
    metadata: PropTypes.object.isRequired
};

export default asMainComponent(Navigation);
