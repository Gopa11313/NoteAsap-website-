import { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Envelope,Telephone,Twitter,Facebook,Instagram,Linkedin } from 'react-bootstrap-icons';
class Topheader extends Component {
    render() {
        return (
            <div className="container-fluid bg-success">
                <Container>
                    <Row>
                        <Col className=" text-light"><Envelope />&nbsp;Gopalaa981952993@gmail.com &nbsp; <Telephone/>&nbsp;9812519751</Col>
                        <Col className="col-2 text-light ml-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <Twitter></Twitter>&nbsp;&nbsp;<Facebook/>&nbsp;&nbsp;<Instagram/>&nbsp;&nbsp;<Linkedin/></Col>
                    </Row>
                
                </Container>
            </div>
        )
    }

}
export default Topheader;