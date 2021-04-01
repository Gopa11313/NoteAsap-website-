import React, { Component } from "react";
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


export class Navigation extends Component {
    removetoken=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        window.location.href = "/";
    }
    render() {
        if(localStorage.getItem('token')){
            var menu=
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
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/upload">UploadNotes</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/mynotes">MyNotes</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/bookmark">Bookmarked</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/account" className="text-primary">MyAccount</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline>
                    <Button className="ml-1 bg-dark text-light" onClick={this.removetoken}>logOut</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        }
        else{
            var menu=
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
                    <Button className="ml-1 bg-dark text-light" ><Link to="/login">Login</Link></Button>
                    <Button className="ml-1 btn-danger" variant="outline-success"><Link to="/signUp">sign Up</Link></Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        }
        return (
            <Styles>
                {menu}
            </Styles>
        )
    }
}
export default Navigation;