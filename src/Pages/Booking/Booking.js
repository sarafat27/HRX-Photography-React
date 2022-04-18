import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
    const { serviceId } = useParams()
    const handleSubmit = event => {
        event.preventDefault();
        toast('Thank you for the booking')
    }
    return (
        <div style={{ paddingBottom: '90px' }}>
            <div className='w-25 mx-auto'>
                <h2 className='my-3'>Booking for service :{serviceId}</h2>
                <Form onSubmit={handleSubmit}><Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">

                        <Form.Control type="text" placeholder="address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">

                        <Form.Control type="text" placeholder="phone number" required />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Checkout
                    </Button>
                </Form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Booking;