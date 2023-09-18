import React from 'react';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';

const Header = (props) => {

  return (
    <div className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center ">
      <div></div>
      <div className='flex'>
        <SearchBar />
        <HeaderIcons />
      </div>
    </div>
  )
};

export default Header;