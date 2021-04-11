import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Layout>
      <Header>
        <Row style={{ height: "100%", marginTop: "0.5%" }}>
          <Col lg={4} />
          <Col lg={16} xs={22} md={20} sm={22}>
            <a href="/">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_358083.png"
                style={{
                  float: "left",
                  width: "70px",
                  marginLeft: "5%",
                }}
              ></img>
            </a>
            <Menu
              mode="horizontal"
              theme="dark"
              style={{ float: "right", width: "40%" }}
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
          <Col lg={4} />
        </Row>
      </Header>
    </Layout>
  );
};
