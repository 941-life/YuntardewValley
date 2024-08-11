import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" className={'Cafe24-font'}>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: 30 }}>Yuntardew Valley</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/story">Story</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default CustomNavbar;
