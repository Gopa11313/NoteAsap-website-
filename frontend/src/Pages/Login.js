import React, { Component } from "react";
import styled from 'styled-components';
import Axios from 'axios'
import Footer from '../Footer/Footer'
import { Layout } from '../Body/Layout';
const Styles = styled.div`
  .login {
    box-sizing:border-box;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: sans-serif;
    background: #12c2e9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
export class Login extends Component {
    state = {
        "email": "",
        "password": ""
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    loginuser = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:90/user/login", this.state)
            .then((response) => {
                console.log(response);
                alert("OK")
            })
            .catch((err) => {
                console.log(err.response)
                alert("here")
            })
    }
    render() {
        return (
            <React.Fragment>
                <form className="container-sm rounded" style={{ 'width': '40%',"border":"1px solid"}}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" value={this.setState.email} onChange={this.changeHandler} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" value={this.setState.password} onChange={this.changeHandler} placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" onClick={this.loginuser} className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
                <Footer/>
                </React.Fragment >
                    );
                    }
                    }
export default Login