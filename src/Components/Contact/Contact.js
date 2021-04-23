import { Row, Col } from "antd";
import Typed from "react-typed";
import "./Contact.css";
import "react-typed/dist/animatedCursor.css";
export const Contact = () => {
  return (
    <div id="contact">
      <Row style={{ marginTop: "37vh" }}>
        <Col lg={6} xs={2} md={3} sm={3} />
        <Col lg={12} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
          <h1 className="contact-header">
            <Typed
              strings={[
                "This could be the start of something great! ^666Let's get in touch. . .",
              ]}
              typeSpeed={40}
            />
          </h1>
        </Col>
        <Col lg={6} xs={2} md={3} sm={2} />
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col lg={6} xs={2} md={3} sm={3} />
        <Col lg={12} xs={20} md={18} sm={18}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "100px",
            }}
            className="links-wrapper"
          >
            <div
              data-aos="fade"
              data-aos-delay="250"
              data-aos-once
              className="contact-container linkedin-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rajatmaheshwari2512/"
              >
                <img
                  alt="linkedin-link"
                  src="https://i.imgur.com/MOTabiN.png"
                  className="linkedin-image"
                ></img>
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="750"
              data-aos-once
              className="contact-container gmail-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:maheshwarirajat098@gmail.com"
              >
                <img
                  alt="gmail-link"
                  src="https://seeklogo.com/images/G/gmail-logo-0240527C35-seeklogo.com.png"
                  className="gmail-image"
                ></img>
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="500"
              data-aos-once
              className="contact-container github-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/rajatmaheshwari2512/"
              >
                <img
                  alt="github-link"
                  src="https://i.imgur.com/Gb6oMvq.png"
                  className="github-image"
                ></img>
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-once
              className="contact-container instagram-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/therealrajatmaheshwari/"
              >
                <img
                  alt="instagram-link"
                  src="https://i.imgur.com/CJX92Lr.png"
                  className="instagram-image"
                ></img>
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6} xs={2} md={3} sm={2} />
      </Row>
    </div>
  );
};
