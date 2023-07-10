import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-1 mt-3 pt-md-3">
          <Col lg="0">
            <h1 className="display-4 mb-4">About me
              <Link to="/contact" className="text_2">
                <div id="container">
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Contact Me</span>
                  </button>
                </div>
              </Link></h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="0">
            <h3 className="color_sec py-3">{dataabout.title}</h3>
          </Col>
          <Col lg="0" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
          <div className="img-container">
            <img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/profilepic.png" alt="K9 Image" className="profile-image" />
          </div>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="0">
            <h3 className="color_sec py-3">Timeline</h3>
          </Col>
          <Col lg="0">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="0">
            <h3 className="color_sec py-3">Skills</h3>
          </Col>
          <Col lg="0">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <p1 className="service_desc">{data.name}</p1>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lang="0">
            <h3 className="color_sec py-3">Expertise</h3>
          </Col>
          <Col lg="0">
            {services.map((data, i) => {
              return (
                <div className="service_ py-3" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
