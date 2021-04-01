import React from "react";
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import { Facebook, Twitter, Google, Linkedin, Instagram, Github } from 'react-bootstrap-icons'

const Team = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={team1}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Gopal Thapa</h5>
              <p className="text-uppercase blue-text">Manager</p>
              <p className="grey-text">
                First of all, thanks for your attention, concern and support.,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                <Facebook/>
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <Twitter/>
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <Instagram/>
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={team2}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Binod Sharma</h5>
              <p className="text-uppercase blue-text">Graphic Designer</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <Facebook/>
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <Twitter/>
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={team3}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Photographer</p>
              <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <Facebook/>
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <Instagram/>
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <Twitter/>
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={team4}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Abhisek Thapa</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <Facebook/>
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <Github/>
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Team;