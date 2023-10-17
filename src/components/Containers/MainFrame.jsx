import React from 'react';
import Containers from './Container';
import LeftMenu from './../LeftMenu/index';
import RightNotification from './../RightNotification/index';
import Header from './../Header/Header';

const MainFrame = (props) => {
  return (
    <Containers>
      <div className="flex h-screen">
        <LeftMenu />
        <Containers>
          <Header />
          {props.children}
        </Containers>
        <RightNotification />
      </div>
    </Containers>
  )
};

export default MainFrame;