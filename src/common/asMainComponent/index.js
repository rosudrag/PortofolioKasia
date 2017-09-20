import React from 'react';
import styles from './index.css';

const asMainComponent = (Component, customStyles) => (props) =>{
    let mainDivClass = 'row center-xs';
    if (typeof (customStyles) !== 'undefined' && customStyles !== null){
        mainDivClass = mainDivClass + ' ' + customStyles;
    }
    return (
    <div className={mainDivClass }>
      <div className={'col-xs-10 col-md-8 ' + styles.componentContainer}>
	    <Component { ...props }/>
      </div>
  </div>);
};


export default asMainComponent;
