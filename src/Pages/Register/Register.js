import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login")
    }
    if(loading || updating){
        return <Loading></Loading>
    }
    if (user) {
        navigate("/home");
    }

    const handleSubmitRegister = async( event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName:name });
        navigate('/home');
    }
    return (
        <div className='container register-form'>
            <h2 className='text-center text-primary mt-3'>Please Register!!</h2>
            <form onSubmit={handleSubmitRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' /> <br />
                <input type="email" name="email" id="" placeholder='Email Address' required /> <br />
                <input type="Password" name="password" id="" placeholder='Password' required /> <br />
                <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree?"ps-2 text-primary":"ps-2 text-danger"}  htmlFor="terms">Accept Genius car Terms and condition </label>
                <input className='btn btn-primary' disabled={!agree} type="submit" value="Register" />
            </form>
            <p>Already Registered? <Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login!</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;