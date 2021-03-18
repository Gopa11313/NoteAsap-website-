import { Component } from "react";
import Register from './Register'
import Login from './Login'
import { Row, Col } from "react-bootstrap"
import { Route } from 'react-router-dom'
import img from '../img/pic2.jpg'
class Container extends Component {
    render() {
        return (
            <>
                <div>
                <img src={img} alt="" data-logo-alt={img} style={{width:'100%'}}>
{/* 
                    <div>
                        <label></label>
                    </div> */}
                </img>
                </div>
                {/* <div className="conatiner "><h2>this is Container

                        </h2>
                    <Row>
                        <Col className="border">
                            <Route path='/register' component={Register} />
                        </Col>
                        <Col className="border">
                            <Route path='/login' component={Login} />

                        </Col>

                    </Row>

                </div> */}
            </>
        )
    }
}
export default Container;