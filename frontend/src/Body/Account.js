import { Component } from "react";
import Axios from "axios"
import { Container, Form, Card, Button } from 'react-bootstrap'
import notes from '../assets/notes.png'
import styled from 'styled-components';
import heading1 from '../assets/heading1.png'
import Footer from '../Footer/Footer'
import Team from '../Body/Team'
import { Link } from "react-router-dom";
const Styles = styled.div`
  .Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width: "500px",
    height: "350px",
    cursor: "pointer",
    backgroundImage: "${notes}",
  })
`;
export class Account extends Component {
    state = {
        "name1": "",
        "email": "",
        file: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        userId: localStorage.getItem('id')

    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }
    componentDidMount() {
        Axios.get("http://localhost:90/get/me/web/" + this.state.userId, this.state.config)
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    name1: response.data.data.name,
                    email: response.data.data.email,
                    file: response.data.data.image
                })
                console.log(this.state)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    updateProfile = (e) => {
        e.preventDefault();
        const data1 = new FormData() // new line
        data1.append('id', localStorage.getItem('id'))
        data1.append('name', this.state.name1)
        data1.append('email', this.state.email)
        data1.append('password', this.state.password)
        data1.append('file', this.state.file)
        Axios.put('http://localhost:90/user/update', data1, this.state.config)
            .then((response) => {
                alert("successfully Updated!!")
                console.log(response)
                // window.location.href = "/account";
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <>
                <Container className="d-flex justify-content-center mb-4" style={{ width: '40%' }}>
                    <Form style={{ width: '100%' }}>
                        <Form.Group className="d-flex justify-content-center">
                            <img type="text" className="rounded-circle" src={"http://localhost:90/images/"
                            +this.state.file}
                                width="150px" height="150px" />
                        </Form.Group>
                        <Form.Group>
                            <Form.File type="file" id="exampleFormControlFile1" label="Select image" name="file" onChange={this.fileHandler} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" className="form-control" name="name1" value={this.state.name1} onChange={this.inputHandler}
                                placeholder="Enter your Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" className="form-control" name="email" value={this.state.email} onChange={this.inputHandler}
                                placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" className="form-control" name="password" value={this.state.password} onChange={this.inputHandler}
                                placeholder="Password" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Con-Password</Form.Label>
                            <Form.Control type="password" name="con-password" value={this.state.con_password} onChange={this.inputHandler} placeholder="Con-Password" />
                        </Form.Group>
                        <Button className="btn btn-dark btn-lg btn-block" variant="primary" type="submit" onClick={this.updateProfile}>
                            Update
                    </Button>
                    </Form>
                </Container>
                <Team/>
                <Footer />
            </>
        )
    }
}
export default Account;