import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/navbarLogo/logo.jpg"

const Header = () => {
    return (
        <>
            <>
                <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img width={50} src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                                <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <h1 className='text-success my-3'>HRX photography</h1>
        </>
    );
};

export default Header;