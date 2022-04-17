import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookLogin from '../FacebookLogin/FacebookLogin';

const Register = () => {
    return (
        <div>
            <div className='w-25 mx-auto'>
                <h2 className='my-3'>Sign up</h2>
                <Form><Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>

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