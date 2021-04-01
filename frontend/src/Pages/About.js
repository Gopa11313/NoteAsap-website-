import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import books from '../assets/books.png'
import note2 from '../assets/notes2.jpg'
import note3 from '../assets/notes3.jpg'
import Team from '../Body/Team'
export const About = () => (
    <>
        <Container className="mb-4">
            <div className="row featurette" style={{ display: "flex"}}>
                <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x450" style={{ "width": "500px", height: "450px" }} src={books} data-holder-rendered="true" />
                </div>
            </div>

            <div className="row featurette mt-3" style={{ display: "flex" }}>
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x450"  src={note2} data-holder-rendered="true" style={{ "width": "500px", height: "450px;" }} />
                </div>
            </div>


            <div className="row featurette mt-3" style={{ display: "flex" }}>
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one.  <span class="text-muted">Checkmate.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x450" style={{ "width": "500px", height: "450px" }} src={note3} data-holder-rendered="true" />
                </div>
            </div>

        </Container>
        <Team/>
        <Footer />
    </>
)