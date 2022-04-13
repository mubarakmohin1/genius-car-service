import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,description,price,img} = service;
    const navigate = useNavigate();
    const handleNavigate = id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
           
          <img className='w-100' src={img} alt="" />
           <h3>{name}</h3>
           <p>Price: {price}</p> 
           <p>{description}</p>
           <button onClick={()=>handleNavigate(id)} className='btn btn-primary'>Book: {name}</button>
          
        </div>
    );
};

export default Service;