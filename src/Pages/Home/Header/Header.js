import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <h1 className='text-success my-3'>HRX Photography</h1>
            <Banner></Banner>
        </div>
    );
};

export default Header;