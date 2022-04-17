import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { name, price, img, description } = service;
    const navigate = useNavigate();

    const goToBooking = () => {
        navigate('/booking')
    }
    return (
        <div className='col-lg-4'>
            <CardGroup>
                <Card>
                    <Card.Img style={{ height: '500px' }} variant="top w-100" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>price: {price}</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={goToBooking} variant="dark">
                        Book now
                    </Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;