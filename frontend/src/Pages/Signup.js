import { Component } from "react";
import { Container, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
export class Signup extends Component {
    state={
        "name":"",
        "email":"",
        "password":"",
        "con_password":""
    
    }
    RegitserUserInfo=(e)=>{
        e.preventDefault();
        const data={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        Axios.post("http://localhost:90/user/add",data).then(response=>{
            console.log(data)
        })
    }
    render() {
        return (
            <Container style={{"width":"40%"}}>
                <h3>Register</h3>
                <Form>
                <Form.Group >
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" value={this.state.name} 
                        onChange={(event)=>this.setState({name:event.target.value})} placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value ={this.state.email }
                        onChange={(event)=>this.setState({email:event.target.value})} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"value ={this.state.password} 
                        onChange={(event)=>this.setState({password:event.target.value})} placeholder="Password" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Con-Password</Form.Label>
                        <Form.Control type="password" value ={this.state.con_password} 
                        onChange={(event)=>this.setState({con_password:event.target.value})} placeholder="Con-Password" />
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
        )
    }
}
export default Signup;