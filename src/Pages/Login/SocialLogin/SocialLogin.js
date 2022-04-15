import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "2px" }} className='bg-primary w-50'></div>
                <div className='ms-3 me-3'>or</div>
                <div style={{ height: "2px" }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info text-white d-block mx-auto mt-2 w-50'>Google Sign In</button>
                <button className='btn btn-success text-white d-block mx-auto mt-2 w-50'>Facebook Sign In</button>
                <button onClick={() =>signInWithGithub()} className='btn btn-primary text-white d-block mx-auto mt-2 w-50'>Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;