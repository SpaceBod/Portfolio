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
          <div><img src="/img/cave.jpg" alt="Cave"/></div>
          <div><img src="https://lh3.googleusercontent.com/SJ9N5ur6GGBHFA3EROoPxS7muGwGDUjY7zWSBFObOvCbcbq7NxeCID9udnbrKaeLIt2zO_Fcbkpsv8AGspB2YLIRmBcwAMqBc-rqhV4aKK3GNJzRPSZYKFIwMI5FTNOliR-9yp_REg" alt="Mountain"/></div>
          <div><img src="https://lh3.googleusercontent.com/A4H3AgOLs4jMDvAU2rztMVRBy03KDVQ9uvvDjWjvDX_XwoaUix0a6VEUG16s_3Il7c0RF8UsaT1CBS-iWzT3a_RZQpOJcA6qkdj9li9rB5gZyd6q30adJRQIYplfOgK0XoH3ivAE_g" alt="Cycling"/></div>
          <div><img src="https://lh3.googleusercontent.com/F0HKH-4SXF90lQYFq2NFPt6Mr8OMsxmuqw45gGaDMxO7TsoEqutj7xMnupdSr_ypdtrWG5WcFoJYp7Vv79JSgzDxDReq7paYxKPq9zk-_3kD8PHT8dovIuYAA_Rfd3pdSLrMUfowhg" alt="Food1"/></div>
          <div><img src="https://lh3.googleusercontent.com/tiiolFW2bHw3XCTQWMu1s240HKAnwPyig7Z7Lyu01YcdGhQzvVBVqxgienAAkzqcBhbPl9km-eUzQwuzbdnxMQIaMnQsdAR0wVEq5MTINvssZ1deOB7xPB7LTd_s93gV5Dn-0rTKxA" alt="Skater"/></div>
          <div><img src="https://lh3.googleusercontent.com/3yUWnTRMrVEUqTW6inWGCeD70CQ0wfPW0O2SRUpKu2OZsDYVdQteBfovhVQA5EBLFCCnW4RT8h6HpbGCI1Z_y2HQZE8SoLALCYhH9-agrdpkFyd4ayehtHG6v3gwLmjvRfkkzpYtew" alt="Singer"/></div>
          <div><img src="https://lh3.googleusercontent.com/myBGPzefPZPQVplEaUKbLwDZNw9uiFuqfDySey2iTgzzWCXYnOM45jajk_Pm-ckOkkwynvuKqjH_yunV7qP35EjDhbealMHn8tm1wPt_130KZGs8J2W16tvCKNEwpLiy6E_yqmhPTQ" alt="FS1"/></div>
          <div><img src="https://lh3.googleusercontent.com/ipug0Ntm-IzF51M4I_HqSjQkbEyE5IiPEQoEHVi-omyFFlZHMvKG686KHQBvB_Z024ETLLkQ512lC5dqdykuUCsNKP6pJ5YOvmu_PV0siJ_ZH2IfQCgS5g0cauDihk9LYEIYgQAAsw" alt="Thailand1"/></div>
          <div><img src="https://lh3.googleusercontent.com/vRz1cBLmyW7uLfVaHTbI1qkRi8QIq4KLPTJ4VE2bs_Vj0Jw-Bt2byzXTnTpfdSXj-UhMGf2VqAUorzbK5zleO46m6kdl0YxTy5tj7eZVRdcwDYfP7x3QhX4koGCvWfipx6-uToDJPw" alt="Thailand2"/></div>
          <div><img src="https://lh3.googleusercontent.com/-50lqJ89Q2F3cMf9xrbU51e4gbqJ2uFIKUat8hN6nHB5BK_HdyejyFNZdMO70dOBhNHH4k70ljiosHcxzBvXN_KdDbyDn0VdVaGO_LnIxT_wGwXluFExzT_FHgcGfgRDWBjWEfQYbw" alt="Food2"/></div>
          <div><img src="https://lh3.googleusercontent.com/s2y7lzBetVmbQFAd5uE9oGRjblqVxfahHC5phwOE8ry7G6IKn_0SyI0jlsF5zREeVP1kdnW3_Dqfq0fE2oSFQgZq4vxNwW2DZqDLPD0_2_4fAzzIkD_Lb1rU3hlvrjUF9-Fzu43Lsw" alt="Dance Group"/></div>
          <div><img src="https://lh3.googleusercontent.com/PwV1440BmMOLBTwuwEJ6gjVq5IBC5OR2qtNMViSCOLzLwoB0II7vVM8jZLeWaZ-Li9aScqgMzupQDfC6QMQVC-gJyZYfQwDQqsvcRhb6s0e9RXkzu9J6EvuNcVmrz2ZWn0PTtCYDlQ" alt="Dancer"/></div>
          <div><img src="https://lh3.googleusercontent.com/u3RGQ7_YPaAn3v81oBSJv0RG8Rc-ZtWh2eTWOc0Gw58ODTS8dsPGKJGfMsUVOoh23799Gva0Zag_AFyhrflLwyRok2uwIm14KM634W2SxPYye9BOLHlqwWwSxYTSyRhxjNmWjUlScg" alt="Guitarist"/></div>
          <div><img src="https://lh3.googleusercontent.com/g8zIttyRVkRN66aCx5kL8cc0G9SOnMRrYREW8kZk7oO4-aaWOYOHhU7uQTVE1tzmOTgUKKZmrUpNjLbxHyed5mLudbs2fzpc-lRANHqQ3LpaijOgyrxXibMGxUxex6WVeYJW8qaRPA=w800" alt="David"/></div>
          
        </div>
      </div>
    </Container>
  </HelmetProvider>
);
