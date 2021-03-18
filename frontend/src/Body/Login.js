import { Component } from "react";
import {Container,Form,Button} from 'react-bootstrap'
import Axios from 'axios'
class Login extends Component{
    state={
        "email":"",
       "password":""
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    loginuser=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:90/user/login",this.state)
        .then((response)=>{
            console.log(response);
            alert("OK")
        })        
        .catch((err)=>{
            console.log(err.response)
            alert("here")
        })
    }
    render(){
        return(

            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={this.setState.email} onChange={this.changeHandler}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={this.setState.password} onChange={this.changeHandler} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.loginuser}>
                Submit
            </Button>
        </Form>
        )
    }
}
export default Login;