import { Component } from "react";
import { Container, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
export class UploadNote extends Component {
    state={
        "file":"",
        "level":"",
        "subject":"",
        "c_name":"",
        "topic":"",
        "description":"",
        "userId":localStorage.getItem('id'),
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    UploadNote=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:90/upload/note/with/file",this.state)
        .then((response)=>{
            console.log(response.data);
            alert("OK")
        })        
        .catch((err)=>{
            console.log(err.response)
            alert("here")
        })
    }
    render() {
        return (
            <Container style={{"width":"40%"}}>
                <h3>Upload Note</h3>
                <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Select File" name="file" value={this.setState.file} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="text" className="form-control" name="level" value={this.setState.level} onChange={this.changeHandler}
                            placeholder="Enter the level." />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" className="form-control" name="subject" value={this.setState.subject} onChange={this.changeHandler}
                            placeholder="Enter the subject." />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>University/college Name</Form.Label>
                        <Form.Control type="text" className="form-control" name="c_name" value={this.setState.c_name} onChange={this.changeHandler}
                            placeholder="Enter College/university name." />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" name="topic" value={this.setState.topic} onChange={this.changeHandler} placeholder="Enter topic" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text"rows="4" name="description" value={this.setState.description} onChange={this.changeHandler} placeholder="Descriptiion" />
                    </Form.Group>

                    <Button className="btn btn-dark btn-lg btn-block" variant="primary" type="submit" onClick={this.UploadNote}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default UploadNote;