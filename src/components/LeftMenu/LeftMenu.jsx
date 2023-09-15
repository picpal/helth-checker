import React from 'react'
import Background from '../Containers/Background';
import Logo from './Logo';

const LeftMenu = () => {
  return (
    <div className="basis-1/6 p-5">
      <Background color="blue">
        <Logo />
      </Background>
    </div>
  )
};


export default LeftMenu;