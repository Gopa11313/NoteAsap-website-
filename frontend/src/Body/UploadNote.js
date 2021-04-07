import { Component } from "react";
import { Container, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import Footer from '../Footer/Footer'
export class UploadNote extends Component {
    state = {
        file: "",
        level: "",
        subject: "",
        c_name: "",
        topic: "",
        description: "",
        noofRating: "0",
        userId: localStorage.getItem('id'),
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }
    UploadNote = (e) => {
        e.preventDefault();
        const data = new FormData() // new line
        data.append('file', this.state.file)
        data.append('level', this.state.level)
        data.append('subject', this.state.subject)
        data.append('c_name', this.state.c_name)
        data.append('topic', this.state.topic)
        data.append('description', this.state.c_name)
        data.append('noofRating', this.state.noofRating)
        data.append('userId', localStorage.getItem('id'))
        Axios.post("http://localhost:90/upload/note/with/file", data, this.state.config)
            .then((response) => {
                // console.log(response.data);
                // console.log({'authorization': `Bearer ${localStorage.getItem('token')}`})
                // alert("OK")
                window.location.href = "/upload";
                alert("successfully uplodaed!")
            })
            .catch((err) => {
                console.log(err.response)
                alert("here")
            })
    }
    render() {
        return (
            <>
                <Container className="rounded mb-3" style={{ 'width': '40%',"border":"1px solid",padding:'10px'}}>
                    <h3>Upload Note</h3>
                    <Form>
                        <Form.Group>
                            <Form.File type="file" id="exampleFormControlFile1" label="Select File" name="file" onChange={this.fileHandler} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Level</Form.Label>
                            <Form.Control type="text" className="form-control" name="level" value={this.state.level} onChange={this.inputHandler}
                                placeholder="Enter the level." />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.inputHandler}
                                placeholder="Enter the subject." />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>University/college Name</Form.Label>
                            <Form.Control type="text" className="form-control" name="c_name" value={this.state.c_name} onChange={this.inputHandler}
                                placeholder="Enter College/university name." />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Topic</Form.Label>
                            <Form.Control type="text" name="topic" value={this.state.topic} onChange={this.inputHandler} placeholder="Enter topic" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" rows="4" name="description" value={this.state.description} onChange={this.inputHandler} placeholder="Descriptiion" />
                        </Form.Group>

                        <Button className="btn btn-dark btn-lg btn-block" variant="primary" type="submit" onClick={this.UploadNote}>
                            Submit
                    </Button>
                    </Form>
                </Container>
                <Footer />
            </>
        )
    }
}
export default UploadNote;