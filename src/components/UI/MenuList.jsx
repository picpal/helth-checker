import React from 'react';

const MenuList = (props) => {
  return (
    <li className="p-1 pl-2 rounded-xl relative">{props.children}</li>
  )
};

export default MenuList;