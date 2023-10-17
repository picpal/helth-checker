import React from 'react';

const ScoreCard = ({params}) => {
  const {bgColor,status, count, percent} = params;

  return (
    <div className={`basis-full p-6 rounded-2xl flex bg-blue-100 justify-between bg-${bgColor}-100`}>
      <div>
        <div className='p-2 font-bold'>{status}</div>
        <div className='p-2 text-3xl'>{count}</div>
      </div>
      <div>
        <div className='p-2 text-lg mt-12'>+{percent}</div>
      </div>
    </div>
  )
};

export default ScoreCard;