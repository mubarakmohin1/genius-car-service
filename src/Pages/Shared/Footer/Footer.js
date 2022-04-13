import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-white mt-5 mb-5 bg-success foot-er'>
           <p><small>copyright @ {year}</small></p> 
        </footer>
    );
};

export default Footer;