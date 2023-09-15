import React from 'react'
import LeftMenu from "../../components/LeftMenu/LeftMenu"; 
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightNotification from "../../components/RightNotification/RightNotification";
import FlexBox from '../../components/Containers/FlexBox';
import Containers from '../../components/Containers/Container';

const DashBoard = (prop) => {
  return (
    <Containers>
      <FlexBox>
        <LeftMenu />
        <MiddleContent />
        <RightNotification />
      </FlexBox>
    </Containers>
  );
};


export default DashBoard;