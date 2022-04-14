import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <div className='text-center mt-5'>
                <Link to={"/check"}> <button className='btn btn-primary'>Proceed checkOut</button> </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;