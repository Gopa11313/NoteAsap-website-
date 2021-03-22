import React from "react";
import { Link } from "react-router-dom";

const JoinBody = () => {
    return (

<div class="get-help my-3" style={{"padding": "80px",
    "height": "300px"
}}>
        <div className="container py-6 py-md-7 py-lg-12 text-center">
            <h2 className="font-weight-bold mb-4">Get help with your classes</h2>
            <button  className="btn cta-signup-bottom text-light" style={{"background-image": "linear-gradient(255deg, #ff4e00 0%, #0650f0 100%)","border": "#0650f0 1px solid"}}><Link to="/signup">Sign Up</Link></button>
        </div>
    </div>
    );
}
export default JoinBody