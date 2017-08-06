import React from 'react';

import styles from './index.css';

const Banner = (props) => {
    return (
    <div className={'row center-xs ' + styles.boxYellow}>
      <div className={'col-xs-9 box-red ' + styles.boxRed}>
        test
      </div>
    </div>
    );
};

export default Banner;
