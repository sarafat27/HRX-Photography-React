import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookLogin from '../FacebookLogin/FacebookLogin';


const Login = () => {
    return (
        <div className='w-25 mx-auto'>
            <h2 className='my-3'>Login</h2>
            <Form>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

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