import React from 'react';

import iconChart from '../../assets/images/chart.png';
import iconTransport from '../../assets/images/transport.png';
import iconStack from '../../assets/images/stack.png';

import MenuTitle from '../UI/Title/MenuTitle';
import SelectedMenuList from '../UI/List/SelectedMenuList';
import MenuLink from '../UI/Link/MenuLink';
import MenuList from '../UI/List/MenuList';


const StatusView = (props) => {
  const services = [
    {
      id : "1" ,
      serviceName : "Pinpay",
      serviceCode : "s_001",
    },
    {
      id : "2" ,
      serviceName : "Pre Order",
      serviceCode : "s_002",
    },
    {
      id : "3" ,
      serviceName : "Subscribe",
      serviceCode : "s_003",
    },
    {
      id : "4" ,
      serviceName : "KIA EW",
      serviceCode : "s_004",
    }
  ]


  return (
    <div>
      <div>
        <MenuTitle text="Status View"/>
      </div>

      <div>
        <ul>
          <SelectedMenuList>
            <MenuLink linkName="Chart" url="/status/chart" icon={iconChart}/>           
          </SelectedMenuList>

          <MenuList>
            <MenuLink linkName="Request List" url="/status/requestList" icon={iconTransport}/>           
          </MenuList>

          <MenuList>
            <MenuLink linkName="Services" icon={iconStack}/>
            <ul className='mt-1'>
              {
                services.map((service) =>
                { 
                  let li = <MenuList key={service.id}>
                            <MenuLink linkName={service.serviceName} url={"/status/service/" + service.serviceCode}/>
                           </MenuList>;
                  if(false) {
                    li = <SelectedMenuList key={service.id}>
                          <MenuLink linkName={service.serviceName} url={"/status/service/" + service.serviceCode}/>
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

export default StatusView;