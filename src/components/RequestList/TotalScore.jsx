import React from 'react';
import ScoreCard from '../UI/Card/ScoreCard';

const TotalScore = (props) => {

  // 실제 데이터로 변경
  const temp = [
    {
      listSeq : "1",
      bgColor : "red",
      status : "Error",
      count : "1,234",
      percent : "11.12%"
    },
    {
      listSeq : "2",
      bgColor : "blue",
      status : "Success",
      count : "1,234",
      percent : "11.12%"
    },
    {
      listSeq : "3",
      bgColor : "green",
      status : "Success",
      count : "1,234",
      percent : "11.12%"
    },
  ]

  return (
    <div className='mt-6 flex w-full items-center gap-6'>
      {
        temp.map((scoreItem) => <ScoreCard key={scoreItem.listSeq} params={scoreItem} />  )
      }
    </div>
  )
};

export default TotalScore;