import React from 'react';
import historyIcon from '../../../assets/images/history.png';
import bellIcon from '../../../assets/images/bell.png';

const HeaderIcons = (props) => {
  return (
    <div className='flex pr-5'>
      <div className='p-0 pl-1 pr-1'>
        <img src={historyIcon} alt="" />
      </div>
      <div className='p-0 pl-1 pr-1'>
        <img src={bellIcon} alt="" />
      </div>
    </div>
  )
};

export default HeaderIcons;