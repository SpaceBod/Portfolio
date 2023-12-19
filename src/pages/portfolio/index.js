import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import YouTube from "react-youtube";
import "./style.css";

export const Portfolio = () => (
  <HelmetProvider>
    <Container className="Showcase-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Showcase | {meta.title} </title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="0">
          <h1 className="display-4 mb-4"> Project Showcase
            <Link to="/github" className="text_2">
              <div id="container">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">View All</span>
                </button>
              </div>
            </Link>
          </h1>
          <hr className="t_border my-4 ml-0 text-left" />
          <h3 className="color_sec py-4">K9 - AI Quadruped Pet</h3>
          <span className="project-date">IBM Group Consultancy Project 2023</span>
          <br></br>
          <br></br>
          <p className="mb-1x">
            I had the privilege of collaborating on the K9 project, an AI companion pet developed in partnership with IBM. Our team worked closely with IBM Watson AI and utilised computer vision technology to enhance K9's interactive capabilities.
          </p>
          <p className="mb-1x">
            In addition to my contributions to the software development, I played a crucial role in the hardware/software aspect of the project. I took charge of the CAD work, in addition to coding the underlying structure of the software. Furthermore, I worked on designing the power system, addressing critical aspects of electronics to optimize K9's performance and functionality. This multifaceted experience allowed me to apply my skills in programming, engineering, and design to create an innovative and captivating AI companion pet. This project pushed the boundaries of AI technology and provided invaluable insights into the intersection of software, hardware, and user experience design.
          </p>
          <p className="mb-1x">
            Check out this showcase video I put together, highlighting the core features of K9:
          </p>
        </Col>

        <Col lg="0" className="image-container">
          <div className="Youtube-container">
            <YouTube videoId="deW5Cu7FMCs" className="youtube-video" />
          </div>
        </Col>
        <Col lg="0" className="image-container">
          <br></br>
          Throughout the project, I assumed the role of project leader. I refined my problem-solving skills and learned to effectively troubleshoot technical challenges that arose. I became adept at working in a team, collaborating closely with my project colleagues to ensure seamless integration between the hardware and software components. Communication and coordination became second nature to me as we synchronised our efforts and exchanged ideas.
        </Col>
        <a href="https://github.com/SpaceBod/K9AI" className="text_2">
          <div id="container">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">View GitHub</span>
            </button>
          </div>
        </a>
      </Row>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="0">
          <hr className="t_border my-4 ml-0 text-left" />
          <h3 className="color_sec py-4">Mars Rover</h3>
          <span className="project-date">Summer Project 2022</span>
          <br></br>
          <br></br>
          <p className="mb-1x">
            The Mars Rover project aimed to design and construct a versatile rover capable of manual and autonomous control, replicating the functionality of real Mars rovers. The primary objective was for the rover to navigate an arena, mapping various objects it encounters. The project comprised six key subsystems, five of which facilitated rover movement and object detection, while the Power Module served as a separate substation for battery charging.
          </p>
          <p className="mb-1x">
            Within the team, my focus centered on designing the frontend webserver, an integral component of the command subsystem. This webserver enabled manual control of the rover and displayed its location on a map using ReactJS. Additionally, I contributed to the drive and autonomous subsystem of the rover, ensuring its smooth operation and functionality.
          </p>
          <div className="img-container">
            <img src="https://raw.githubusercontent.com/SpaceBod/EE2-MarsRover/main/Images/coverIMG.png" alt="K9 Image" className="portfolio-image" />
          </div>
        </Col>
        <Col lg="0" className="image-container">
          <p className="mb-1x">
            <br></br>
            Collaboration was a key aspect of the project, and I honed my teamwork and communication skills through effective coordination with my project teammates. I learned to work in a multidisciplinary team, combining my knowledge with others in areas such as electronics, power systems, and control systems.
          </p>
        </Col>
        <div>
          <a href="https://github.com/SpaceBod/EE2-MarsRover" className="text_2">
            <div id="container">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View GitHub</span>
              </button>
            </div>
          </a>
        </div>
      </Row>
      <br>
      </br>
    </Container>
  </HelmetProvider >
);