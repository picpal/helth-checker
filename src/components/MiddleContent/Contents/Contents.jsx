import React from 'react';
import DaySelector from './DaySelector';
import TotalScore from './TotalScore';
import StatusTable from './StatusTable';

const Contents = (props) => {
  return (
    <div className='p-6'> 
      <DaySelector />
      <TotalScore />
      <StatusTable />
    </div>
  )
};

export default Contents;