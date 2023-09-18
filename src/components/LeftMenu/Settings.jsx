import React from 'react';
import MenuHeading2 from '../UI/MenuHeading2';
import MenuList from '../UI/MenuList';
import MenuLink from '../UI/MenuLink';

const Settings = (props) => {
  return (
    <div className='pt-5 pb-5'>
      <div>
        <MenuHeading2 text="Settings"/>
      </div>
      <div className='mt-2'>
        <ul>
          <MenuList>      
            <MenuLink linkName="Set Service" url=""/>      
          </MenuList>
          <MenuList>
            <MenuLink linkName="Set Notification"  url=""/>
          </MenuList>
        </ul>
      </div>
    </div>
  )
};

export default Settings;