import React from 'react';

const TdServiceName = ({serviceName}) => {
  return (
    <td className='w-2/12 min-w-[140px]'>
      <span>{serviceName}</span>
    </td>
  )
};

export default TdServiceName;