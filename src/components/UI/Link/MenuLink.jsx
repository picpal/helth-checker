import React from 'react';
import { Link } from 'react-router-dom';
import iconDot from '../../../assets/images/dot.png'

const MenuLink = ({linkName="default" , url , icon}) => {
  const listHeadIcon = icon ? icon : iconDot;

  return (
    <Link to={url} className='flex items-center hover:opacity-70'>
      <img src={listHeadIcon} />
      <span className='ml-2'>{linkName}</span>
    </Link>
  )
};

export default MenuLink;