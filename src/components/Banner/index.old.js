import React from 'react';
import { Link } from 'phenomic';

import Button from '../../../components/Button';
import styles from '../index.css';

const Banner = (props) => {
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

export default Banner;
