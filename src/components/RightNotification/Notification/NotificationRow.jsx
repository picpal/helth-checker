import React from 'react';
import notiError from '../../../assets/images/noti_error.png'
import notiTimeout from '../../../assets/images/noti_timeout.png'

const NotificationRow = ({notifications}) => {
  const {status, message, date} = notifications;

  return (
    <div className='flex items-start gap-2 p-2 pl-0 pr-0'>
      <div>
        <span>
          {
            status === "timeout" 
              ? <img src={notiTimeout} alt="옅은 빨간색 배경에 곤충 아이콘" />
              : <img src={notiError} alt="옅은 파란색 배경에 전자파 아이콘" />
          }
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-sm'>{message}</span>
        <span className='text-sm text-gray-400'>{date}</span>
      </div>
    </div>
  )
};

export default NotificationRow;