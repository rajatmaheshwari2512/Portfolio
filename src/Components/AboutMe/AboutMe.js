import { Row, Col } from "antd";
import "./AboutMe.css";
export const AboutMe = () => {
  return (
    <div id="aboutme">
      <Row style={{ marginTop: "37vh", width: "100vw" }}>
        <Col lg={5} xs={2} md={3} sm={3} />
        <Col lg={6} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
          <h1 className="about-heading">
            <b>About Me</b>
          </h1>
          <br />
          <p className="about-first">
            I am a Second Year Student from the Indian Institute of Information
            Technology, Gwalior, pursuing my B.Tech in Information Technology
          </p>
          <p className="about-second">
            I am a Full Stack Developer, I really enjoy building new things and
            overcoming new challenges. I'm always eager to learn new concepts
            and apply them in my projects Currently, I'm building a Quizzing
            Platform for the PrepiiT Coaching Institute
          </p>
          <p className="about-third">
            I am a dedicated team player, and I get along well with any team
            environment. I do well under pressure which I feel makes me a good
            addition to any team. I also have strong command over Data
            Structures and Algorithms.
          </p>
          <p className="about-fourth">
            In my free time, I enjoy playing tennis or guitar, if not these,
            you'll find me reading a book or playing video games with friends
          </p>
        </Col>
        <Col lg={1} xs={2} />
        <Col lg={9} style={{ display: "flex", alignItems: "center" }}>
          <section className="main">
            <div className="container">
              <>
                <div className="img-container">
                  <img
                    className="image"
                    src="https://i.imgur.com/Tcot1pl.jpg"
                    alt="MyFace"
                  />
                </div>
              </>
            </div>
          </section>
        </Col>
        <Col lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};