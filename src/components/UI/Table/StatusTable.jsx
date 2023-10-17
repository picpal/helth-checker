import React, { useState } from 'react';
import StatusTableTitle from './StatusTableTItle';
import StatusTableTr from './StatusTableTr';
import TdStatus from './TdStatus';
import TdServiceName from './TdServiceName';
import TdEndPoint from './TdEndPoint';
import TdResponseTime from './TdResponseTime';


const StatusTable = (props) => {
  const [sortStatus,setSortStatus] = useState({
    status : "asc",
    serviceName : "asc"
  });

  const [service,setService] = useState([
    {
      status : "OK",
      serviceName : "PINPAY1",
      url : "https://www.bluewalnut.co.kr/api/v1/helthcheck",
      time : "00:00:00 00.02.00"
    } ,
    {

      
      status : "ERROR",
      serviceName : "PINPAY2",
      url : "https://www.bluewalnut.co.kr/api/v1/helthcheck",
      time : "00:00:00 00.02.11"
    } ,
  ]);

  const tableHeadClickHandler = (e) => {
    e.preventDefault();

    if(sortStatus.status === 'asc'){
      setSortStatus({...sortStatus,status:"desc"})
      service.sort((a,b) => {
        if(a.status > b.status) return 1;
        if(a.status < b.status) return -1;
        return 0;
      });
    }else{
      setSortStatus({...sortStatus,status:"asc"})
      service.sort((a,b) => {
        if(a.status > b.status) return -1;
        if(a.status < b.status) return 1;
        return 0;
      });
    }
    
    setService([...service]);
  }

  return (
    <div className='mt-6 border rounded-xl p-6'>
      <table className='w-full'>
        <thead>
         <StatusTableTitle tableHeadClickHandler={tableHeadClickHandler}/>
        </thead>
        <tbody>
          {
            service.map((data,idx)=>(
              <StatusTableTr key={idx}>
                <TdStatus status={data.status} />
                <TdServiceName serviceName={data.serviceName} />
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