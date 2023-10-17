import React from 'react';
import MenuHeading2 from '../UI/Title/MenuTitle';
import MenuList from '../UI/List/MenuList';
import MenuLink from '../UI/Link/MenuLink';


const Favorites = (props) => {
  return (
    <div className='pt-5 pb-5 '>
      <div>
        <MenuHeading2 text="Favorites"/>
      </div>
      <div>
        <ul>
          <MenuList>      
            <MenuLink linkName="Set Service" url="1234"/>
          </MenuList>
        </ul>
      </div>
    </div>
  )
};

export default Favorites;