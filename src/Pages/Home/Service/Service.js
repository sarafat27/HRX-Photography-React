import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='col-lg-4'>
            <CardGroup>
                <Card>
                    <Card.Img style={{ height: '500px' }} variant="top w-100" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;