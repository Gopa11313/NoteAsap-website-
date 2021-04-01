import { Component } from "react";
import Axios from "axios"
import axios from "axios";
import { Card, Button } from 'react-bootstrap'
import notes from '../assets/notes.png'
import styled from 'styled-components';
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
export class Bookmarked extends Component {
    state = {
        notes: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id:localStorage.getItem('id')

    }

    componentDidMount() {
        axios.get("http://localhost:90/bookmark/notes/"+this.state.id,this.state.config)
            .then((response) => {
                this.setState({
                    notes: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
            
    }
    deletenotes=(ab)=>{
        Axios.delete("http://localhost:90/delete/bookmark/" +ab, this.state.config)
            .then((response) => {
                console.log(response.data.data)
                window.location.href = "/bookmark";
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
                        this.state.notes.map((c) => {
                            return (
                                <div className="col-md-4" style={{padding:50}}>
                                    <Styles>
                                        <Card style={{ width: '20rem',padding:10}}>
                                            <Card.Img variant="top" src={notes} />
                                            <Card.Body>
                                                <Card.Title>{c.topic}</Card.Title>
                                                <Card.Text>
                                                    {c.description}
                                                </Card.Text>
                                                {/* <Button variant="primary">Open</Button> */}
                                                <Button variant="primary"onClick={this.deletenotes.bind(this,c.noteId)}>Remove Bookmarked</Button>
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
export default Bookmarked;