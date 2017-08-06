import React from 'react';
// import styles from './index.css';

const asMainComponent = (Component) => (props) =>
    <div className='row center-xs'>
      <div className='col-xs-8 box-red'>
	    <Component { ...props }/>
      </div>
    </div>;

export default asMainComponent;
