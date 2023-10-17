import React from 'react';

const RequestCountRow = ({servicesCount}) => {
  const {serviceName , requestCount} = servicesCount;

  return (
    <div className='flex flex-row p-2 pl-0 pr-0 items-center gap-2'>
      <div className='w-1/4 text-sm'>{serviceName}</div>
      <div className='w-2/4'>
        <span className='block rounded-xl bg-gray-400 w-full h-3' />
      </div>
      <div className='w-1/4 text-sm'>{requestCount}</div>
    </div>
  )
};

export default RequestCountRow;