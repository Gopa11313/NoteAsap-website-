import { Component } from "react";
import Axios from "axios"
import { Card, Button } from 'react-bootstrap'
import notes from '../assets/notes.png'
import styled from 'styled-components';
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
export class MyNotes extends Component {
    state = {
        ownnotes: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        userId: localStorage.getItem('id')

    }
    componentDidMount() {
        Axios.get("http://localhost:90/get/Ownnotes/web/" + this.state.userId, this.state.config)
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    ownnotes: response.data.data
                })
                // console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    deletenotes=(ab)=>{
        Axios.delete("http://localhost:90/delete/note/" +ab, this.state.config)
            .then((response) => {
                console.log(response.data.data)
                console.log(ab)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    render() {
        return (
            <>
                <div style={{}}>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.ownnotes.map((a) => {
                                    return (
                                        <div className="col-md-4" style={{ padding: 50 }}>
                                            <Styles>
                                                <Card style={{ width: '20rem', padding: 10 }}>
                                                    <Card.Img variant="top" src={notes} />
                                                    <Card.Body>
                                                        <Card.Title>{a.topic}</Card.Title>
                                                        <Card.Text>
                                                            {a.description}
                                                        </Card.Text>
                                                        <p variant="primary" ><Link to={'/updateNote/' + a._id}>Update</Link> </p>
                                                        {/* <Button variant="primary" onClick={this.deletenotes(a._id)}>Delete</Button> */}
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
                <Footer />
            </>
        )
    }
}
export default MyNotes;