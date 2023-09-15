import React from 'react'

const Background = (props) => {
  const {color} = props;
  let bgColor;
  switch (color) {
    case "blue" : 
      bgColor = "bg-blue-200";
      break;
    case "red" : 
      bgColor = "bg-red-200";
      break;
    case "orange" : 
      bgColor = "bg-orange-200";
      break;
    default :
      bgColor = "";
  }

  return (
    <div className={`h-full w-full ${bgColor}`}>
      {props.children}
    </div>
  )
};

export default Background;