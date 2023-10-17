import React,{useState} from 'react';
import downArrow from '../../assets/images/downArrow.png';

const SelectBox = ({filterItems}) => {
  const filterSeletedItem = filterItems.filter(item => item.selected);
  if(filterSeletedItem.length > 1){
    console.error("선택된 아이템이 2개 이상 입니다. 전달된 데이터를 확인해주세요");
  }
  const [seletedItem,setSeletedItem] = useState(filterSeletedItem[0]);

  return (
    <div>
    <div className='flex items-center gap-1 cursor-pointer hover:opacity-70'>
      <span>{seletedItem.name}</span>
      <span><img src={downArrow} alt="아래 방향 화살표" /></span>
    </div>
    {/* <ul>
      <li>Today</li>
      <li>2023-09-12</li>
      <li>2023-09-13</li>
    </ul> */}
  </div>
  )
};

export default SelectBox;