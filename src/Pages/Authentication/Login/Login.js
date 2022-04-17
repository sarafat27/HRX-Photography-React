import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import FacebookLogin from '../FacebookLogin/FacebookLogin';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true })
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    return (
        <div className='w-25 mx-auto'>
            <h2 className='my-3'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <p className='my-3'>New to This website? <Link className='text-decoration-none' to='/register'>please register</Link></p>
            </Form>
            <FacebookLogin></FacebookLogin>
        </div>
    );
};

export default Login;