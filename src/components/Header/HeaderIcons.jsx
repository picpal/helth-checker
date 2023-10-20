import React from 'react';
import userIcon from '../../assets/images/user.png';
import bellIcon from '../../assets/images/bell.png';
import sidebarSimple from '../../assets/images/SidebarSimple.png';


const HeaderIcons = () => {
  return (
    <div className='flex pr-5 items-center gap-2'>
      <div className='p-0 pl-1 pr-1 cursor-pointer'>
        <img src={userIcon} alt="" />
      </div>
      <div className='p-0 pl-1 pr-1 cursor-pointer'>
        <img src={bellIcon} alt="" />
      </div>
      <div className='p-0 pl-1 pr-1 cursor-pointer'>
        <img src={sidebarSimple} alt="" />
      </div>
    </div>
  )
};

export default HeaderIcons;