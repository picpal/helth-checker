import React from 'react'
import Logo from './Logo';
import Favorites from './Favorites';
import Settings from './Settings';
import ServiceList from './ServiceList/ServiceList';


const LeftMenu = () => {
  return (
    <div className="basis-1/6 p-5 border-r border-gray-300 min-w-[260px]">
      <Logo />
      <Favorites />
      <Settings />
      <ServiceList />
    </div>
  )
};


export default LeftMenu;