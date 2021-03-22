import { Component } from "react";
import Axios from "axios"
import axios from "axios";
class Display extends Component {
    state = {
        notes: [],
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        }
       
    }
    componentDidMount() {
        axios.get("http://localhost:90/get/notes",this.state.config)
            .then((response) => {
               // console.log(response.data.data)
                this.setState({
                    notes: response.data.data
                })
            })
            .catch((err)=>{
                console.log(err.response)
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.notes.map((b) => {
                            return (
                                <div className="col-md-4">
                                  <h2>{b.topic}</h2>
                                  <p>{b.discription}</p>  
                                </div>
                            )
                        })
                    }

                    { }
                </div>
            </div>
        )
    }
}
export default Display;