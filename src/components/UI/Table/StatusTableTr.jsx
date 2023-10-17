import React from 'react';

const StatusTableTr = (props) => {
  return (
    <tr className='flex p-3 pl-0 pr-0 gap-6 border-b items-center border-gray-300'>
      {props.children}
    </tr>
  )
};

export default StatusTableTr;