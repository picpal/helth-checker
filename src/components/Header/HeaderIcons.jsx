import React from 'react';
import userIcon from '../../assets/images/user.png';
import bellIcon from '../../assets/images/bell.png';

const HeaderIcons = (props) => {
  return (
    <div className='flex pr-5 items-center gap-2'>
      <div className='p-0 pl-1 pr-1'>
        <img src={userIcon} alt="" />
      </div>
      <div className='p-0 pl-1 pr-1'>
        <img src={bellIcon} alt="" />
      </div>
    </div>
  )
};

export default HeaderIcons;