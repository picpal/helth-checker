import React from 'react';
import StatusTableTr from '../../UI/Dashboard/StatusTableTr';
import TdEndPoint from '../../UI/Dashboard/TdEndPoint';
import TdResponseTime from '../../UI/Dashboard/TdResponseTime';
import StatusTableTitle from '../../UI/Dashboard/StatusTableTItle';
import TdStatus from '../../UI/Dashboard/TdStatus';
import TdServiceName from '../../UI/Dashboard/TdServiceName';

const StatusTable = (props) => {

  const fakeData = [
    {
      status : "OK",
      serviceName : "PINPAY",
      url : "https://www.bluewalnut.co.kr/api/v1/helthcheck",
      time : "00:00:00 00.02.00"
    } ,
    {
      status : "ERROR",
      serviceName : "PINPAY",
      url : "https://www.bluewalnut.co.kr/api/v1/helthcheck",
      time : "00:00:00 00.02.11"
    } ,
  ]

  return (
    <div className='mt-6 border rounded-xl p-6'>
      <table className='w-full'>
        <thead>
         <StatusTableTitle />
        </thead>
        <tbody>
          {
            fakeData.map((data,idx)=>(
              <StatusTableTr key={idx}>
                <TdStatus status={data.status}/>
                <TdServiceName serviceName={data.serviceName}/>
                <TdEndPoint url={data.url}/>
                <TdResponseTime time={data.time}/>
              </StatusTableTr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  )
};

export default StatusTable;