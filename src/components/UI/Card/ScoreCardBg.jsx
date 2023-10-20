import React from 'react';

const bgColors = {
  red: "bg-red-100",
  blue: "bg-blue-100",
  green: "bg-green-100",
};

const ScoreCardBg = ({ color, children }) => {
  let backgroundColor = bgColors[color];
  let classNm = `basis-full p-6 rounded-2xl flex justify-between ${backgroundColor}`;

  return (
    <div className={classNm}>
      {children}
    </div>
  )
};

export default ScoreCardBg;