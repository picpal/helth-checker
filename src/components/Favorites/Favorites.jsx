import React from 'react';
import MenuHeading2 from '../UI/Title/MenuTitle';
import MenuList from '../UI/List/MenuList';
import MenuLink from '../UI/Link/MenuLink';


const Favorites = () => {
  const favoritesPage = [
    {pageName : "Set Service" , url : "/setting/service"},
    {pageName : "Service-Pinpay" , url : "/status/service/s_001"},
  ]

  return (
    <div className='pt-5 pb-5 '>
      <div>
        <MenuHeading2 text="Favorites"/>
      </div>
      <div>
        <ul>
          <MenuList> 
            {
              favoritesPage.map( (favorite , idx) => <MenuLink key={idx} linkName={favorite.pageName} url={favorite.url}/> )
            }     
          </MenuList>
        </ul>
      </div>
    </div>
  )
};

export default Favorites;