import { Component } from "react";
import { Layout } from '../Body/Layout';
import styled from 'styled-components';
import heading1 from '../assets/heading1.png'
import heading2 from '../assets/heading2.png'
import heading3 from '../assets/heading3.png'
const Styles = styled.div`
  .card {
    width: "140px", 
    height: "140px"
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
class CardBody extends Component {
    render() {
        return (
            <Layout>
                <div className="my-3">
                    <h2 className="text-center"> How its work for Uploader</h2>
                    <p className="text-center">Boost Your Exam Prep</p>
                    <div className="row">
                        <div className="col-lg-4 ">
                            <img className="rounded-circle card" src={heading1}
                                width="140px" height="140px" />
                            <h2>Join Us</h2>
                            <p>We provide all kinds of note.You can find universities notes, college notes, school notes, phd notes,
                            masters notes.
                            You can find join or register option anywhere in our website. By submitting your credentials you can
                            esily join with us, and
                    you can boost your exam prep. </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" width="140px" height="140px" src={heading2} />
                            <h2>Upload Notes</h2>
                            <p>You can upload any kinds of notes. You can upload universities related notes, campus course's notes,
                            college course's note
                            and school course's notes or author notes.
                </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" src={heading3} width="140px" height="140px" />
                            <h2>Grow Your Prepration</h2>
                            <p>Search any notes and boost your exam prepiration. Glad to help.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default CardBody