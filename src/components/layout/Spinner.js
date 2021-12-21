import React from 'react';
import SpinnerLogo from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={SpinnerLogo}
        alt='loading...'
      />
    </div>
  );
};

export default Spinner;
