import React from 'react';
import MenuHeading2 from '../UI/Title/MenuTitle';
import MenuList from '../UI/List/MenuList';
import MenuLink from '../UI/Link/MenuLink';

const Settings = (props) => {
  return (
    <div className='pt-5 pb-5 '>
      <div>
        <MenuHeading2 text="Settings"/>
      </div>
      <div>
        <ul>
          <MenuList>      
            <MenuLink linkName="Set Service" url="/setting/service"/>      
          </MenuList>
          <MenuList>
            <MenuLink linkName="Set Notification"  url="/setting/notification"/>
          </MenuList>
        </ul>
      </div>
    </div>
  )
};

export default Settings;