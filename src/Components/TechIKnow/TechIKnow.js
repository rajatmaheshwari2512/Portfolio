import { Row, Col } from "antd";
import "./TechIKnow.css";
export const TechIKnow = () => {
  return (
    <div className="techiknow">
      <Row style={{ marginTop: "55vh" }}>
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
            variety of skills, here are some of them
          </p>
        </Col>
      </Row>
    </div>
  );
};
