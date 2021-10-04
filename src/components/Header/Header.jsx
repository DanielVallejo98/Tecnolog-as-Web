import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#" style={{color:'black'}}><strong>Sistema LIS</strong> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="#action1">Ingresar nuevo paciente</Nav.Link>
            <Nav.Link href="#action2">Ver pacientes</Nav.Link>

            <Nav.Link href="#" >CC</Nav.Link>
            <Nav.Link href="#" >Estadísticas</Nav.Link>
            </Nav>
            <Form className="d-flex">
            
            <Button variant="outline-danger"><i className="fas fa-sign-out-alt fa-lg "></i></Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
            )
}

export default Header
