import React from 'react';

const SelectedMenuList = (props) => {
  return (
    <li className={`p-1 pl-2 rounded-xl relative bg-slate-100`}>{props.children}</li>
  )
};

export default SelectedMenuList;