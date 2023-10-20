import React from 'react';
import bwcLogo from '../assets/images/bwc-logo.png';


const Logo = (props) => {
  return (
    <div className='flex justify-center'>
      <img src={bwcLogo} alt="bluewalnut logo" />
    </div>
  )
};

export default Logo;