import React from 'react';
import StatusTable from '../../components/UI/Table/StatusTable';
import TotalScore from '../../components/RequestList/TotalScore';
import SelectBox from '../../components/UI/SelectBox';
import FlexBoxRow from '../../components/Containers/FlexBoxRow';

const RequestList = (props) => {
  const days = [
    {name : "Today" , value : "today", selected:true},
    {name : "TT" , value : "tt", selected:false},
    {name : "DD" , value : "dd", selected:false}
  ]
  const services = [
    {name : "Service" , value : "today", selected:true},
    {name : "TT" , value : "tt", selected:false},
    {name : "DD" , value : "dd", selected:false}
  ]
  const status = [
    {name : "Status" , value : "today", selected:true},
    {name : "TT" , value : "tt", selected:false},
    {name : "DD" , value : "dd", selected:false}
  ]


  return (
    <div className='p-6'> 
      <FlexBoxRow>
        <SelectBox filterItems={days} />
        <SelectBox filterItems={services} />
        <SelectBox filterItems={status} />
      </FlexBoxRow>
      <TotalScore />
      <StatusTable />
    </div>
  )
};

export default RequestList;