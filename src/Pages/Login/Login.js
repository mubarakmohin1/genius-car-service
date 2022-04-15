import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const handleSubmitButton = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }
    const navigateRegister = event => {
        navigate('/register')
    }
const resetPassword = async()=>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
}

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {

        errorElement =  <p className='text-danger'>Error: {error?.message}</p>
        

    }



    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-center text-primary mt-2'>Please Login!!</h2>
            <Form onSubmit={handleSubmitButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                 
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius car? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register!</Link></p>
            <p>Forget password? <Link to={'/register'} className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset password!</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;