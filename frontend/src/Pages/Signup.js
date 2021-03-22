import { Component } from "react";
import { Container, Form, Button } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Axios from 'axios'
export class Signup extends Component {
    state={
        name1:"",
        "email":"",
        "password":"",
        "con_password":""
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    RegitserUserInfo=(e)=>{
       const data = {
           name : this.state.name1,
           email : this.state.email,
           password : this.state.password,
           con_password : this.state.con_password
       }
        e.preventDefault();
        Axios.post("http://localhost:90/user/add",data)
        .then((response)=>{
            console.log(response);
            alert("OK")
        })        
        .catch((err)=>{
            console.log(err.response)
            alert("here")
        })
    }
    render() {
        return (
            <>
            <Container style={{"width":"40%"}}>
                <h3>Register</h3>
                <Form>
                <Form.Group >
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" className="form-control" name="name1" value={this.setState.name1}  onChange={this.changeHandler}
                        placeholder="Enter full name"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"className="form-control" name="email" value={this.setState.email}  onChange={this.changeHandler}
                         placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"className="form-control"name="password" value={this.setState.password}  onChange={this.changeHandler}
                        placeholder="Password" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Con-Password</Form.Label>
                        <Form.Control type="password" name="con-password" value={this.setState.con_password}  onChange={this.changeHandler} placeholder="Con-Password" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="btn btn-dark btn-lg btn-block" variant="primary" type="submit" onClick={this.RegitserUserInfo}>
                        Submit
                    </Button>
                    <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
                </Form>
               
            </Container>
             <Footer/>
             </>
        )
    }
}
export default Signup;