import React from 'react';
import NotificationRow from './NotificationRow';
import MenuTitle from '../UI/Title/MenuTitle';


const Notifications = (props) => {
  const temp = [
    {
      status : "error",
      message : "PINPAY 307 ERROR 발생",
      date : "Just now"
    },
    {
      status : "error",
      message : "PINPAY 307 ERROR 발생",
      date : "Today, 10:59:50"
    },
    {
      status : "error",
      message : "PINPAY 307 ERROR 발생",
      date : "Today, 09:10:23"
    },
  ]

  return (
    <div>
      <MenuTitle text="Notification"/>
      {
        temp.map((notifications,idx) => <NotificationRow key={idx} notifications={notifications} />)
      }
    </div>
  )
};

export default Notifications;