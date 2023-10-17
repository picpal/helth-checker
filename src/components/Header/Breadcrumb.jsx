import React from 'react';
import startFill from '../../assets/images/star_fill.png'
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  return (
    <div className='pl-6 flex flex-row items-center gap-3 text-base'>
      <div>
        <img src={startFill} alt="노란색 별모양 아이콘" />
      </div>
      <ul className='flex flex-row items-center gap-2 text-gray-400'>
        <li>Settings</li>
        <li>&gt;</li>
        <li className='text-sky-600'>
          <Link className='font-bold'>Set Service</Link>
        </li>
      </ul>
    </div>
  )
};

export default Breadcrumb;