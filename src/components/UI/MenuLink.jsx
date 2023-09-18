import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({linkName ,url}) => {
  return (
    <Link className='flex items-center hover:opacity-70'>
      <i className="fa-solid fa-genderless"></i>
      <span className='ml-2'>{linkName}</span>
    </Link>
  )
};

export default MenuLink;