import React from 'react';
import StatusTableTr from './StatusTableTr';

const StatusTableTitle = ({tableHeadClickHandler}) => {
  return (
    <StatusTableTr>
      <td className='w-2/12 text-center min-w-[120px] max-w-[150px] flex gap-2 items-center justify-center cursor-pointer hover:opacity-70' onClick={tableHeadClickHandler}>
        <span>STATUS</span>
        <i className="fa-solid fa-arrow-down-wide-short"></i>
      </td>
      <td className='w-2/12 min-w-[140px] flex gap-2 items-center justify-center cursor-pointer hover:opacity-70' >
        <span>SERVICE NAME</span>
        <i className="fa-solid fa-arrow-down-wide-short"></i>
      </td>
      <td className='w-6/12'>END POINT</td>
      <td className='w-2/12 min-w-[110px] text-center'>RESPONSE TIME</td>
    </StatusTableTr> 
  )
};

export default StatusTableTitle;