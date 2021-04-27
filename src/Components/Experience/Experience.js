import { Row, Col } from "antd";
import "./Experience.css";
export const Experience = () => {
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "rgba(255, 255, 255, 0.85)";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <div id="experience">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            className="experience-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ borderBottom: "2px solid rgb(168, 164, 164)" }}
          >
            <b>Experience</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={5}
          xl={5}
          lg={18}
          xs={10}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              textDecoration: "underline",
              textDecorationColor: "rgb(168, 164, 164)",
            }}
            className="prepiit-heading"
          >
            <b>
              <a
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
                href="https://testprepiit.ml"
                target="_blank"
                rel="noreferrer"
                onMouseOver={handleHover}
              >
                PrepiiT
              </a>
            </b>
          </h1>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={12}
          xl={12}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="role-heading"
            style={{
              textDecoration: "underline",
              textDecorationColor: "rgb(168, 164, 164)",
            }}
          >
            <b>Backend Developer</b>
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ color: "rgb(168, 164, 164)" }}
          >
            <li className="list">
              Developed the backend of the PrepiiT Quizzing Platform
            </li>
            <li className="list">
              Developed a RESTful API in NodeJS, and the framework used was
              ExpressJS
            </li>
            <li className="list">Used PostgreSQL as Database of choice</li>
            <li className="list">
              Everytime a user wants to give a test, questions are randomly
              picked from the Database according to the paper pattern set by the
              admin
            </li>
            <li className="list">
              Admin can add, remove, edit all questions and tests, bulk
              questions can be uploaded in CSV format
            </li>
            <li className="list">
              All users get their test analysis which is all handled in the
              backend
            </li>
            <li className="list">
              Live Testing feature is also available (Test will be available
              only for certain amount of time)
            </li>
          </ul>
        </Col>
        <Col xxl={7} xl={7} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
