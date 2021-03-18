import { Component } from "react";
import Register from './Register'
import Login from './Login'
import {Row,Col} from "react-bootstrap"
import {Route} from 'react-router-dom'
class Container extends Component{
    render(){
        return(
            <div className="conatiner "><h2>this is Container

            </h2>
            <Row>
                <Col className="border">
                    <Route path='/register' component={Register}/>
                   {/* // <Register></Register> */}
                    </Col>
                <Col className="border"> 
                <Route path='/login' component={Login}/>
        
                </Col>
            
            </Row>
            {/* <Register></Register> */}
            </div>
        )
    }
}
export default Container;