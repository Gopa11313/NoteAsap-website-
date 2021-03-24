import { Component } from "react";
import Axios from "axios"
import axios from "axios";
import { Card, Button } from 'react-bootstrap'
import notes from '../assets/notes.png'
import styled from 'styled-components';
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
class Display extends Component {
    state = {
        notes: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }
    componentDidMount() {
        axios.get("http://localhost:90/get/notes", this.state.config)
            .then((response) => {
                this.setState({
                    notes: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div style={{}}>
            <div className="container">
                <div className="row">
                    {
                        this.state.notes.map((b) => {
                            return (
                                <div className="col-md-4" style={{padding:50}}>
                                    <Styles>
                                        <Card style={{ width: '20rem',padding:10}}>
                                            <Card.Img variant="top" src={notes} />
                                            <Card.Body>
                                                <Card.Title>{b.topic}</Card.Title>
                                                <Card.Text>
                                                    {b.description}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Styles>
                                </div>
                            )
                        })
                    }

                    { }
                </div>
            </div>
            </div>
        )
    }
}
export default Display;