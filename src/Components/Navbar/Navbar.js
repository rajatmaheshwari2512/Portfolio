import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Layout>
      <Header>
        <Row style={{ height: "100%", marginTop: "1%" }}>
          <Col lg={2} xs={1} md={2} sm={1} />
          <Col lg={18} xs={22} md={20} sm={22}>
            <a href="/">
              <svg
                id="logo"
                width="40%"
                height="70"
                viewBox="0 0 355 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ float: "left" }}
              >
                <path
                  d="M52.936 110L29.032 68.96H13.192V110H0.0880127V9.63199H32.488C40.072 9.63199 46.456 10.928 51.64 13.52C56.92 16.112 60.856 19.616 63.448 24.032C66.04 28.448 67.336 33.488 67.336 39.152C67.336 46.064 65.32 52.16 61.288 57.44C57.352 62.72 51.4 66.224 43.432 67.952L68.632 110H52.936ZM13.192 58.448H32.488C39.592 58.448 44.92 56.72 48.472 53.264C52.024 49.712 53.8 45.008 53.8 39.152C53.8 33.2 52.024 28.592 48.472 25.328C45.016 22.064 39.688 20.432 32.488 20.432H13.192V58.448Z"
                  stroke="white"
                  stroke-width="1"
                />
              </svg>
            </a>
            <Menu
              mode="horizontal"
              theme="dark"
              style={{ float: "right", width: "60%", textAlign: "right" }}
              className="nav"
            >
              <Menu.Item className="link" key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item className="link" key="education">
                <Link to="/education">Education</Link>
              </Menu.Item>
              <Menu.Item className="link" key="experience">
                <Link to="/experience">Experience</Link>
              </Menu.Item>
              <Menu.Item className="link" key="contact">
                <Link to="/contact">Contact Me</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col lg={4} xs={1} md={2} sm={1} />
        </Row>
      </Header>
    </Layout>
  );
};