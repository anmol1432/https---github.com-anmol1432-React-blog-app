import React from 'react'
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, Offcanvas, Container, Form, FormControl } from 'react-bootstrap';
import "./index.css";


const NAVBAR = () => {
    return (
        <>
            <Navbar bg="light" expand={'false'} sticky={'top'}>
                <Container fluid >
                    <Link to='/blog/' className='link'>
                        <Navbar.Brand href="#"><span style={{ fontSize: '2rem' }}>📚</span> React Blog </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to='/blog/' className='link'>
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                </Link>
                                <Link to='/blog/add' className='link mb-2'>
                                    <Button variant="dark">Add Blog ➕</Button>
                                </Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NAVBAR
