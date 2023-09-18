import React from 'react';
import MenuHeading2 from '../../UI/MenuHeading2';
import MenuList from '../../UI/MenuList';
import SelectedMenuList from '../../UI/SelectedMenuList';
import MenuLink from '../../UI/MenuLink';

const ServiceList = (props) => {
  return (
    <div>
      <div>
        <MenuHeading2 text="Service List"/>
      </div>

      <div className='mt-2'>
        <ul>
          <SelectedMenuList>
            <MenuLink linkName="Total Service"/>            
          </SelectedMenuList>
          <MenuList>
            <MenuLink linkName="Services"/>
            <ul className='pl-3 mt-1'>
              <MenuList>
                <MenuLink linkName="Pinpay"/>
              </MenuList>
              <MenuList>
                <MenuLink linkName="Pre Order"/>
              </MenuList>
              <MenuList>
                <MenuLink linkName="Subscribe"/>
              </MenuList>
              <MenuList>
                <MenuLink linkName="KIA EW"/>
              </MenuList>
            </ul>
          </MenuList>
        </ul>
      </div> 
    </div>
  )
};

export default ServiceList;