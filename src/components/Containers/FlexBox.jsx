import React from 'react';

const FlexBox = (props) => {
  return (
    <div>
      <div className="flex h-screen">{props.children}</div>
    </div>
  )
};


export default FlexBox;