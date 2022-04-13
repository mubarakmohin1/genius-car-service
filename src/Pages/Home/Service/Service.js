import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,description,price,img} = service;
    return (
        <div className='service-container'>
           
          <img className='w-100' src={img} alt="" />
           <h3>{name}</h3>
           <p>Price: {price}</p> 
           <p>{description}</p>
          
        </div>
    );
};

export default Service;