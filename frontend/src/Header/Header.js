import { Component } from "react";
import Topheader from './Topheader'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div>
                <Topheader/>
                <Navigation/>
            </div>
        )
    }
}
export default Header