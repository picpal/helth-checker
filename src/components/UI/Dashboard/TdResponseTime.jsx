import React from 'react';

const TdResponseTime = ({time}) => {
  return (
    <td className='w-2/12 min-w-[110px] text-center'>
      <span>{time}</span>
    </td>
  )
};

export default TdResponseTime;