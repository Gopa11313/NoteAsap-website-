import React from "react";
import { Link } from "react-router-dom";

const JoinBody = () => {
    return (

<div class="get-help my-3">
        <div className="container py-6 py-md-7 py-lg-12 text-center" style={{"padding-top": "12rem !important",
        "padding-bottom": "12rem !important;"}}>
            <h2 className="font-weight-bold mb-4">Get help with your classes</h2>
            <button  className="btn btn-primary cta-signup-bottom"><Link to="/signup">Sign Up</Link></button>
        </div>
    </div>
    );
}
export default JoinBody