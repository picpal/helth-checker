import React from 'react'
import LeftMenu from "../../components/LeftMenu/LeftMenu"; 
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightNotification from "../../components/RightNotification/RightNotification";
import FlexBox from '../../components/Containers/FlexBox';

const DashBoard = (prop) => {
  return (
    <FlexBox>
      <LeftMenu />
      <MiddleContent />
      <RightNotification />
    </FlexBox>
  );
};


export default DashBoard;