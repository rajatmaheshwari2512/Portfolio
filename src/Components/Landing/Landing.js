import { Row, Col } from "antd";
import "./Landing.css";
export const Landing = () => {
  return (
    <div id="landing">
      <Row style={{ marginTop: "17vh" }}>
        <Col xxl={5} xl={5} lg={4} xs={2} md={3} sm={3} />
        <Col
          xxl={14}
          xl={14}
          lg={17}
          xs={20}
          md={18}
          sm={18}
          style={{
            textAlign: "left",
          }}
        >
          <p
            data-aos="fade"
            data-aos-delay="200"
            data-aos-once
            className="welcome-hi"
          >
            Hi, my name is
          </p>
          <p
            data-aos="fade"
            data-aos-delay="600"
            data-aos-once
            className="name"
          >
            <b>Rajat Maheshwari.</b>
          </p>
          <p
            data-aos="fade"
            data-aos-delay="1000"
            data-aos-once
            className="short-desc"
          >
            <b>I build things for the Web.</b>
          </p>
          <p
            data-aos="fade"
            data-aos-delay="1400"
            data-aos-once
            className="long-desc"
            style={{ color: "rgb(168, 164, 164)" }}
          >
            I am a MERN Stack developer with a passion for backend development
            <br />
            specialising in NodeJS. I love building stuff and solving problems,
            <br /> and I'm currently pursing Information Technology from the
            Indian Instit-
            <br />
            ute of Information Technology, Gwalior.
          </p>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
