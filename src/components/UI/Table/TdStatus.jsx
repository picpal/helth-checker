import React from 'react';

const TdStatus = ({status}) => {
  const bgColor = status === 'ERROR' ? "bg-red-200" : 'bg-green-200';
  
  return (
    <td className='w-2/12 text-center min-w-[120px] max-w-[150px]'>
      <span className={`inline-block item w-4/5 pt-1 pb-1 ${bgColor} rounded-2xl text-center`}>{status}</span>
    </td>
  )
};

export default TdStatus;