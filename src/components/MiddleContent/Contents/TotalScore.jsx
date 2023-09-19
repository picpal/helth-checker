import React from 'react';
import ScoreCard from '../../UI/Dashboard/ScoreCard';

const TotalScore = (props) => {
  return (
    <div className='mt-6 flex w-full items-center gap-6'>
      <ScoreCard bgColor="red"/>
      <ScoreCard bgColor="blue"/>
      <ScoreCard bgColor="green"/>
    </div>
  )
};

export default TotalScore;