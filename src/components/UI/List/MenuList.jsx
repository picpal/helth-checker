import React from 'react';

const MenuList = (props) => {
  return (
    <li className="p-1 pl-4 pr-0 rounded-xl relative">{props.children}</li>
  )
};

export default MenuList;