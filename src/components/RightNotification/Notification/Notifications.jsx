import React from 'react';
import MenuHeading2 from '../../UI/Title/MenuTitle';
import NotificationRow from './NotificationRow';


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
      <MenuHeading2 text="Notification"/>
      {
        temp.map((notifications,idx) => <NotificationRow key={idx} notifications={notifications} />)
      }
    </div>
  )
};

export default Notifications;