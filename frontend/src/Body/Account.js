import { Component } from "react";
import Axios from "axios"
import {Container, Card, Button } from 'react-bootstrap'
import notes from '../assets/notes.png'
import styled from 'styled-components';
import heading1 from '../assets/heading1.png'
import Footer from '../Footer/Footer'
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
       
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        userId: localStorage.getItem('id')

    }
    componentDidMount() {
        Axios.get("http://localhost:90/get/Ownnotes/web/" + this.state.userId, this.state.config)
            .then((response) => {
                // console.log(response.data.data)
                this.setState({
                    ownnotes: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <>
            <Container className="d-flex justify-content-center" style={{"width":"40%"}}>
            <img type="text" className="rounded-circle" src={heading1}
                                width="140px" height="140px" />


            </Container>
                <Footer />
            </>
        )
    }
}
export default Account;