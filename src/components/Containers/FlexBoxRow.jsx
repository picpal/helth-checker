import React from 'react';

const FlexBoxRow = (props) => {
  return (
    <div className='w-full flex flex-row gap-3 items-center'>
      {props.children}
    </div>
  )
};

export default FlexBoxRow;