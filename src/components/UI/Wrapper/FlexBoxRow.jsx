import React from 'react';

const FlexBoxRow = ({children , gap = 3}) => {
  const className = `w-full flex flex-row gap-${gap} items-center`;

  return (
    <div className={className}>
      {children}
    </div>
  )
};

export default FlexBoxRow;