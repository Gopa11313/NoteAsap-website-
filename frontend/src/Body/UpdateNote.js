import { Component } from "react";
import { Container, Form, Button } from 'react-bootstrap'
import Axios from 'axios'
export class UpdateNote extends Component {
    state = {
        "file": "",
        "level": "",
        "subject": "",
        "c_name": "",
        "topic": "",
        "description": "",
        "userId": localStorage.getItem('id'),
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        Axios.get("http://localhost:90/note/by/notid/web/" + this.state.id,this.state.config)
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    level: response.data.data.level,
                    subject: response.data.data.subject,
                    c_name: response.data.data.c_name,
                    topic: response.data.data.topic,
                    description: response.data.data.description
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    updateNote = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:90/Update/note', this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <Container style={{ "width": "40%" }}>
                <h3>UpdateNote</h3>
                <Form>
                    <Form.Group>
                        <Form.File type="file" id="exampleFormControlFile1" label="Select File" name="file" value={this.state.file} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="text" className="form-control" name="level" value={this.state.level} onChange={this.changeHandler}
                         />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.changeHandler}
                             />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>University/college Name</Form.Label>
                        <Form.Control type="text" className="form-control" name="c_name" value={this.state.c_name} onChange={this.changeHandler}
                             />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" name="topic" value={this.state.topic} onChange={this.changeHandler}  />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" rows="4" name="description" value={this.state.description} onChange={this.changeHandler} placeholder="Descriptiion" />
                    </Form.Group>

                    <Button className="btn btn-dark btn-lg btn-block" variant="primary" type="submit" onClick={this.updateNote}>
                        Update
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default UpdateNote;