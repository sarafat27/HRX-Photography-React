import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import FacebookLogin from '../FacebookLogin/FacebookLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            alert('please give same password and confirm password')
        }
        else {
            createUserWithEmailAndPassword(email, password);
            navigate('/home')
        }

    }
    return (
        <div>
            <div className='w-25 mx-auto'>
                <h2 className='my-3'>Sign up</h2>
                <Form onSubmit={handleSubmit}><Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button className='w-100' variant="primary" type="submit">
                        SignUp
                    </Button>
                    <p className='my-3'>Already have an account? <Link className='text-decoration-none' to='/login'>please login</Link></p>
                </Form>
                <FacebookLogin></FacebookLogin>
            </div>
        </div>
    );
};

export default Register;