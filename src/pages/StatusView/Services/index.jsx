import React from 'react';
import { useParams } from 'react-router-dom';

const Services = (props) => {
  const {serviceCode} = useParams();

  return (
    <div className='p-6'> 
      {`${serviceCode}`}
    </div>
  )
};

export default Services;