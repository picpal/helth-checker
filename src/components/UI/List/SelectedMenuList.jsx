import React from 'react';

const SelectedMenuList = (props) => {
  return (
    <li className={`p-1 pl-4 pr-0 rounded-xl relative bg-slate-100`}>
      {props.children}
      <span className='absolute left-0 top-2 w-1 h-4 bg-gray-500 rounded-md' />  
    </li>
  )
};

export default SelectedMenuList;