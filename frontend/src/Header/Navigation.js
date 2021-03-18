import { Component } from "react";
//import funcation from './funcation'
import Register from '../Body/Register'
import Login from '../Body/Login';
// import './header.css';
import Modal from "react-responsive-modal";
import { Link } from 'react-router-dom'
import { Navbar, FormControl, Button, Form, NavDropdown, Nav } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
class Navigation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,
        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    render() {
        const { login, sign } = this.state;
        return (
            <>
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">NoteAsap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <Button href='/login'  variant="outline-success">Login</Button>
                            <Button href='/register' variant="outline-success">Signup</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </>

        );
    }
}

export default Navigation;