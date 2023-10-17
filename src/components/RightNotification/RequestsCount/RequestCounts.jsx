import React from 'react';
import MenuHeading2 from '../../UI/Title/MenuTitle';
import RequestCountRow from './RequestCountRow';

const RequestCounts = (props) => {
  const temp = [
    {
      serviceName : "PINPAY",
      requestCount : 143
    },
    {
      serviceName : "상품구독",
      requestCount : 50
    },
    {
      serviceName : "사전주문",
      requestCount : 223
    },
    {
      serviceName : "Bluepay",
      requestCount : 408
    },
  ]

  return (
    <div>
      <MenuHeading2 text="Request Count"/>
      
      {
        temp.map((servicesCount,idx)=>
          <RequestCountRow key={idx} servicesCount={servicesCount}/>
        )
      }
    </div>
  )
};

export default RequestCounts;