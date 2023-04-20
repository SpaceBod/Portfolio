import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Photography = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Photography | {meta.title} </title>{" "}
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4"> My Photography </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div class="image-container">
        <div class="images">
          
          
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/restaurant1.jpg" alt="Restaurant Food 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/sushi1.jpg" alt="Restaurant Food 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/sushi2.jpg" alt="Restaurant Food 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/restaurant2.jpg" alt="Restaurant Food 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/singerFS.jpg" alt="Singer"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow1.jpg" alt="Fashion Show 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow2.jpg" alt="Fashion Show 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow3.jpg" alt="Fashion Show 3"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow4.jpg" alt="Fashion Show 4"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/dance1.jpg" alt="Dance Group 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/dance2.jpg" alt="Dance Group 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow5.jpg" alt="Fashion Show 5"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai1.jpg" alt="Thai 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai2.jpg" alt="Thai 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai3.jpg" alt="Thai 3"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai4.jpg" alt="Thai 4"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai5.jpg" alt="Thai 5"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai6.jpg" alt="Thai 6"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai7.jpg" alt="Thai 7"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/thai8.jpg" alt="Thai 8"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/skater.jpg" alt="Skater"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/street1.jpg" alt="Street 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/street2.jpg" alt="Street 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/street3.jpg" alt="Street 3"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/cave.jpg" alt="Welsh Cave"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/mountain.jpg" alt="Restaurant"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/bike.jpg" alt="Cycling"/></div>
        </div>
      </div>
    </Container>
  </HelmetProvider>
);
