import React from 'react';
import Containers from './UI/Wrapper/Container';
import Logo from './Logo';
import Header from './Header/Header';
import Settings from './Settings/Settings';
import Favorites from './Favorites/Favorites';
import StatusView from './StatusView/StatusView';
import RequestCount from './RequestCount/RequestCount';
import Notifications from './Notification/Notifications';

const MainFrame = (props) => {
  return (
    <Containers>
      <div className="flex h-screen">
        {/* Left Section */}
        <div className="basis-1/6 p-5 border-r border-gray-300 min-w-[220px] max-w-[260px]">
          <Logo />
          <Favorites />
          <Settings />
          <StatusView />
        </div>

        {/* Main Section */}
        <Containers>
          <Header />
          {props.children}
        </Containers>

        {/* Right Section */}
        <div className='basis-1/6 p-5 border-l min-w-[320px] flex flex-col gap-5'>
          <Notifications />
          <RequestCount />
        </div>
      </div>
    </Containers>
  )
};

export default MainFrame;