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
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/cave.jpg" alt="Welsh Cave"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/mountain.jpg" alt="Mountain"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/bike.jpg" alt="Cycling"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/restaurant1.jpg" alt="Restaurant Food"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/singerFS.jpg" alt="Singer"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow1.jpg" alt="Fashion Show 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow2.jpg" alt="Fashion Show 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow3.jpg" alt="Fashion Show 3"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow4.jpg" alt="Fashion Show 4"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/dance1.jpg" alt="Dance Group 1"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/dance2.jpg" alt="Dance Group 2"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/fashionShow5.jpg" alt="Fashion Show 5"/></div>
          <div><img src="https://lh3.googleusercontent.com/ipug0Ntm-IzF51M4I_HqSjQkbEyE5IiPEQoEHVi-omyFFlZHMvKG686KHQBvB_Z024ETLLkQ512lC5dqdykuUCsNKP6pJ5YOvmu_PV0siJ_ZH2IfQCgS5g0cauDihk9LYEIYgQAAsw" alt="Thailand1"/></div>
          <div><img src="https://lh3.googleusercontent.com/vRz1cBLmyW7uLfVaHTbI1qkRi8QIq4KLPTJ4VE2bs_Vj0Jw-Bt2byzXTnTpfdSXj-UhMGf2VqAUorzbK5zleO46m6kdl0YxTy5tj7eZVRdcwDYfP7x3QhX4koGCvWfipx6-uToDJPw" alt="Thailand2"/></div>
          <div><img src="https://lh3.googleusercontent.com/-50lqJ89Q2F3cMf9xrbU51e4gbqJ2uFIKUat8hN6nHB5BK_HdyejyFNZdMO70dOBhNHH4k70ljiosHcxzBvXN_KdDbyDn0VdVaGO_LnIxT_wGwXluFExzT_FHgcGfgRDWBjWEfQYbw" alt="Food2"/></div>
          <div><img src="https://lh3.googleusercontent.com/s2y7lzBetVmbQFAd5uE9oGRjblqVxfahHC5phwOE8ry7G6IKn_0SyI0jlsF5zREeVP1kdnW3_Dqfq0fE2oSFQgZq4vxNwW2DZqDLPD0_2_4fAzzIkD_Lb1rU3hlvrjUF9-Fzu43Lsw" alt="Dance Group"/></div>
          <div><img src="https://lh3.googleusercontent.com/PwV1440BmMOLBTwuwEJ6gjVq5IBC5OR2qtNMViSCOLzLwoB0II7vVM8jZLeWaZ-Li9aScqgMzupQDfC6QMQVC-gJyZYfQwDQqsvcRhb6s0e9RXkzu9J6EvuNcVmrz2ZWn0PTtCYDlQ" alt="Dancer"/></div>
          <div><img src="https://lh3.googleusercontent.com/u3RGQ7_YPaAn3v81oBSJv0RG8Rc-ZtWh2eTWOc0Gw58ODTS8dsPGKJGfMsUVOoh23799Gva0Zag_AFyhrflLwyRok2uwIm14KM634W2SxPYye9BOLHlqwWwSxYTSyRhxjNmWjUlScg" alt="Guitarist"/></div>
          <div><img src="https://lh3.googleusercontent.com/g8zIttyRVkRN66aCx5kL8cc0G9SOnMRrYREW8kZk7oO4-aaWOYOHhU7uQTVE1tzmOTgUKKZmrUpNjLbxHyed5mLudbs2fzpc-lRANHqQ3LpaijOgyrxXibMGxUxex6WVeYJW8qaRPA=w800" alt="David"/></div>
          <div><img src="https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/pages/photography/img/skater.jpg" alt="Skater"/></div>
          
        </div>
      </div>
    </Container>
  </HelmetProvider>
);
