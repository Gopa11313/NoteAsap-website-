import { Component } from "react";
import Register from '../Body/Register'
import Login from '../Body/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Navbar, FormControl, Button, Form, NavDropdown, Nav } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const Navigation = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">NoteAsap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline>
                    <Button href='/login' className="ml-1 btn-danger text-light" variant="outline-success">Login</Button>
                    <Button href='/register' className="ml-1 " variant="outline-success">Signup</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
export default Navigation;