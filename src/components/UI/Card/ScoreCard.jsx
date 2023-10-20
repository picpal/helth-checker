import React from 'react';
import ScoreCardBg from './ScoreCardBg';


const ScoreCard = ({params}) => {
  const {bgColor,status, count, percent} = params;

  return (
    <ScoreCardBg color={bgColor}>
      <div>
        <div className='p-2 font-bold'>{status}</div>
        <div className='p-2 text-3xl'>{count}</div>
      </div>
      <div>
        <div className='p-2 text-lg mt-12'>+{percent}</div>
      </div>
    </ScoreCardBg>
  )
};

export default ScoreCard;