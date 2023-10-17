import React from 'react';
import MenuHeading2 from '../../UI/Title/MenuTitle';
import MenuLink from '../../UI/Link/MenuLink';
import MenuList from '../../UI/List/MenuList';
import SelectedMenuList from '../../UI/List/SelectedMenuList';


const ServiceList = (props) => {
  const services = [
    {
      id : "1" ,
      linkName : "Pinpay",
    },
    {
      id : "2" ,
      linkName : "Pre Order",
    },
    {
      id : "3" ,
      linkName : "Subscribe",
    },
    {
      id : "4" ,
      linkName : "KIA EW",
    }
  ]


  return (
    <div>
      <div>
        <MenuHeading2 text="Status View"/>
      </div>

      <div>
        <ul>
          <SelectedMenuList>
            <MenuLink linkName="Chart"/>           
          </SelectedMenuList>

          <MenuList>
            <MenuLink linkName="Request List"/>           
          </MenuList>

          <MenuList>
            <MenuLink linkName="Services"/>
            <ul className='mt-1'>
              {
                services.map((service) =>
                { 
                  let li = <MenuList key={service.id}>
                            <MenuLink linkName={service.linkName}/>
                           </MenuList>;
                  if(false) {
                    li = <SelectedMenuList key={service.id}>
                          <MenuLink linkName={service.linkName}/>
                         </SelectedMenuList>
                  }
                  return li;
                })
              }
            </ul>
          </MenuList>
        </ul>
      </div> 
    </div>
  )
};

export default ServiceList;