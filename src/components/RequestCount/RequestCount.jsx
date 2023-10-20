import React from 'react';
import MenuTitle from '../UI/Title/MenuTitle';
import RequestCountRow from './RequestCountRow';

const RequestCount = (props) => {
  const temp = [
    {
      serviceName : "PINPAY",
      requestCount : 143,
      errorCount : 1,
    },
    {
      serviceName : "상품구독",
      requestCount : 50,
      errorCount : 23,
    },
    {
      serviceName : "사전주문",
      requestCount : 223,
      errorCount : 2,
    },
    {
      serviceName : "Bluepay",
      requestCount : 408,
      errorCount : 253,
    },
  ]

  return (
    <div>
      <MenuTitle text="Request Count"/>
      {
        temp.map((servicesCount,idx)=>
          <RequestCountRow key={idx} servicesCount={servicesCount}/>
        )
      }
    </div>
  )
};

export default RequestCount;