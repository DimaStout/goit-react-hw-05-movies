import React from 'react';
import { Bars } from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={s.loaderContainer}>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
