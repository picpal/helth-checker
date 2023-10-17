import React from 'react';
import HeaderIcons from './HeaderIcons';
import Breadcrumb from './Breadcrumb';


const Header = (props) => {

  return (
    <div className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center ">
      <div >
        <Breadcrumb />
      </div>
      <div className='flex'>
        <HeaderIcons />
      </div>
    </div>
  )
};

export default Header;