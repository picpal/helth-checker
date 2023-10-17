import React from 'react'
import Notifications from './Notification/Notifications';
import RequestCounts from './RequestsCount/RequestCounts';


const RightNotification = () => {
  return (
    <div className='basis-1/6 p-5 border-l min-w-[320px] flex flex-col gap-5'>
      <Notifications />
      <RequestCounts />
    </div>
  )
};


export default RightNotification;