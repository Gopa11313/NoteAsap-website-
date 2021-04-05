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
class Display extends Component {
    state = {
        notes: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        userId: localStorage.getItem('id'),
        noteId: ""

    }
    componentDidMount() {
        axios.get("http://localhost:90/get/notes")
            .then((response) => {
                this.setState({
                    notes: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    Bookmark = (ab) => {
        if (localStorage.getItem('token')) {
            const data = new FormData() // new line
            data.append('noteId', ab)
            data.append('userId', localStorage.getItem('id'))
            axios.post("http://localhost:90/note/bookmark", data, this.state.config)
                .then((response) => {
                    alert("you have successfully bookmarked this note")
                    window.location.href = "/";
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
        else {
            alert("To Bookmark Noe=te you have to log in.")
        }
    }
    render() {
        return (
            <div style={{}}>
                <div className="container">
                    <div className="row">
                        {
                            this.state.notes.map((b) => {
                                return (
                                    <div className="col-md-4" style={{ padding: 50 }}>
                                        <Styles>
                                            <Card style={{ width: '20rem', padding: 10 }}>
                                                <Card.Img variant="top" src={notes} />
                                                <Card.Body>
                                                    <Card.Title>{b.topic}</Card.Title>
                                                    <Card.Text>
                                                        {b.description}
                                                    </Card.Text>
                                                    <Button variant="primary" onClick={this.Bookmark.bind(b._id)}>Bookmark</Button>
                                                    {/* <p variant="primary" ><Link to={'/updateNote/'+b._id}>Update</Link> </p> */}

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