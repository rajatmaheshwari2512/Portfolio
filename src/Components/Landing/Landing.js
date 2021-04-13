import { Row, Col } from "antd";
import "./Landing.css";
export const Landing = () => {
  return (
    <div id="landing">
      <Row style={{ marginTop: "17vh" }}>
        <Col lg={5} xs={2} md={3} sm={3} />
        <Col
          lg={14}
          xs={20}
          md={18}
          sm={18}
          style={{
            textAlign: "left",
          }}
        >
          <p className="welcome-hi">Hi, my name is</p>
          <p className="name">
            <b>Rajat Maheshwari.</b>
          </p>
          <p className="short-desc">
            <b>I build things for the Web.</b>
          </p>
          <p className="long-desc" style={{ color: "rgb(168, 164, 164)" }}>
            I am a MERN Stack developer with a passion for backend development
            <br />
            specialising in NodeJS. I love building stuff and solving problems,
            <br /> and I'm currently pursing Information Technology from the
            Indian Instit-
            <br />
            ute of Information Technology, Gwalior.
          </p>
        </Col>
        <Col lg={5} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
