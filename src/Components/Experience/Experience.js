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
      <Row style={{ marginTop: "50px" }}>
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
            className="imocha-heading"
          >
            <b>
              <a
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
                href="https://imocha.io"
                target="_blank"
                rel="noreferrer"
                onMouseOver={handleHover}
              >
                iMocha
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
            <b>MVP & POC Intern</b>
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ color: "rgb(168, 164, 164)" }}
          >
            <li className="list">
              Working at iMocha as a Full Stack Development intern
            </li>
            <li className="list">
              Working on extending the current functionality of the skill
              assessment platform of iMocha
            </li>
            <li className="list">
              Used a browser based IDE, Eclipse Theia, to create a development
              skill assessment POC project
            </li>
            <li className="list">
              Users can login, with a particular test link, the details of the
              test, which are set by the admin are then loaded in.
            </li>
            <li className="list">
              A Docker container is created for the user to attempt his
              assessment in. A folder structure is displayed, the user can
              create as many files and folders as he needs.
            </li>
            <li className="list">
              Buttons for running and stopping the service without touching the
              terminal is also implemented, although the user can use the
              terminal is he wants to
            </li>
            <li className="list">
              On submission, the server will zip the submission, and push it to
              a persistent storage like Amazon S3 or Microsoft Azure. The admin
              who created the test can then view submissions and download them
              according to his liking
            </li>
            <li className="list">
              The Theia workspace comes with a browser preview extension built
              into it, the user can run the project on any port he likes and
              view the project freely
            </li>
          </ul>
        </Col>
        <Col xxl={7} xl={7} lg={3} xs={2} md={3} sm={3} />
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={5}
          xl={5}
          lg={18}
          xs={18}
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
            className="fossee-heading"
          >
            <b>
              <a
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
                href="https://github.com/frg-fossee/eSim-Cloud"
                target="_blank"
                rel="noreferrer"
                onMouseOver={handleHover}
              >
                FOSSEE, IIT Powai
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
            <b>Full Stack Developer</b>
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ color: "rgb(168, 164, 164)" }}
          >
            <li className="list">
              Worked as a Full Stack Developer, at FOSSEE, IIT Powai
            </li>
            <li className="list">
              Developed a Version Control System, for users to save multiple
              versions of a circuit, and to revert back to previous versions,
              giving users the freedom to explore various options without the
              fear of losing progress
            </li>
            <li className="list">
              Branching is also supported and the user can create multiple
              branches according to his needs
            </li>
            <li className="list">
              Integrated versioning with workflow to publish various circuits,
              with the ability to publish various versions of the circuit
            </li>
            <li className="list">
              Worked on adding a Popup bar for setting component properties,
              which allows users to set the parameters of a component right next
              it.
            </li>
            <li className="list">
              This is especially useful as it allows direct integration of the
              Schematic Editor in various places without the need to add the
              entire page.
            </li>
            <li className="list">
              Press{" "}
              <a
                style={{ color: "rgb(168, 164, 164)" }}
                href="https://drive.google.com/file/d/14oGikIo7GG-gcybT_ee_McOl1pjUvAGO/view?usp=sharing"
              >
                <u>
                  <b>me</b>
                </u>
              </a>{" "}
              to read a detailed report of the project
            </li>
          </ul>
        </Col>
        <Col xxl={7} xl={7} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
