import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import FacebookLogin from '../FacebookLogin/FacebookLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
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
    if (error || error2) {
        errorElement = <p className='text-danger'>{error?.message} {error2?.message}</p>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('email sent')
        }
        else {
            toast('please give an email address')
        }
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
            <p>Forget password? <button onClick={resetPassword} className='btn btn-link text-decoration-none text-success'>
                Reset password
            </button></p>
            <FacebookLogin></FacebookLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;