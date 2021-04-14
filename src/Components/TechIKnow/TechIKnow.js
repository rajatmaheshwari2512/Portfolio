import { Row, Col } from "antd";
import "./TechIKnow.css";
export const TechIKnow = () => {
  return (
    <div id="techiknow">
      <Row style={{ marginTop: "35vh" }}>
        <Col lg={5} xs={2} md={3} sm={3} />
        <Col lg={6} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
          <h1 className="techiknow-heading">
            <b>Tech I Know</b>
          </h1>
          <br />
          <p className="techiknow-first">
            I love learning new things, the world of Web Development is
            constantly changing and I'm here for every bit of that journey.
            Applying new concepts and seeing them come to life is immensely
            satisfying and gives me a sense of massive pride
          </p>
          <p className="techiknow-second">
            In the process of learning new things, I have picked up quite a wide
            variety of skills.
          </p>
          <p className="techiknow-third">My best skills include:</p>
        </Col>
        <Col lg={3} xs={2} md={3} sm={3} />
        <Col
          lg={7}
          xs={24}
          md={24}
          sm={24}
          style={{ textAlign: "left", marginTop: "2%" }}
        >
          {/* <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <img
              src="https://i.imgur.com/Q5Eawzt.png"
              height="70px"
              width="70px"
            ></img>
            <img
              src="https://i.imgur.com/tHEM8wl.png"
              height="70px"
              width="70px"
            ></img>
            <img
              src="https://i.imgur.com/lewBvSv.png"
              height="70px"
              width="70px"
            ></img>
            <img
              src="https://i.imgur.com/CwcKlXH.png"
              height="65px"
              width="60px"
            ></img>
            <img
              src="https://i.imgur.com/0k3mbIx.png"
              height="70px"
              width="100px"
            ></img>
          </Row>
          <br />
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <img
              src="https://i.imgur.com/AK9gKN6.png"
              height="80px"
              width="70px"
            ></img>
            <img
              src="https://i.imgur.com/GAHP0Lp.png"
              height="70px"
              width="85px"
            ></img>
            <img
              src="https://i.imgur.com/ClQqsrq.png"
              height="70px"
              width="70px"
            ></img>
            <img
              src="https://i.imgur.com/ClQqsrq.png"
              height="70px"
              width="70px"
            ></img>
          </Row> */}
        </Col>
        <Col lg={3} />
      </Row>
    </div>
  );
};
