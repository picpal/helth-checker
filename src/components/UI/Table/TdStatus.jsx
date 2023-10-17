import React from 'react';

const TdStatus = ({status}) => {
  const bgColor = status === 'ERROR' ? "red" : 'green';
  
  return (
    <td className='w-2/12 text-center min-w-[120px] max-w-[150px]'>
      <span className={`inline-block item w-4/5 pt-1 pb-1 bg-${bgColor}-200 rounded-2xl text-center`}>{status}</span>
    </td>
  )
};

export default TdStatus;