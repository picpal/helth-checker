import React from 'react';

const ScoreCard = ({bgColor}) => {
  return (
    <div className={`basis-full p-6 rounded-2xl flex bg-blue-100 justify-between bg-${bgColor}-100`}>
      <div>
        <div className='p-2 font-bold'>Success</div>
        <div className='p-2 text-3xl'>1,234</div>
      </div>
      <div>
        <div className='p-2 text-lg mt-12'>+11.01%</div>
      </div>
    </div>
  )
};

export default ScoreCard;