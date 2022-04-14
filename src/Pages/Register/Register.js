import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login")
    }
    const handleSubmitRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='container register-form'>
            <h2 className='text-center text-primary mt-3'>Please Register!!</h2>
            <form onSubmit={handleSubmitRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' /> <br />
                <input type="email" name="email" id="" placeholder='Email Address' required /> <br />
                <input type="Password" name="password" id="" placeholder='Password' required /> <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already Registered? <Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login!</Link></p>
        </div>
    );
};

export default Register;