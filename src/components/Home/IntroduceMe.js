import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function IntroduceMe() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an engineer with full-stack experience and a
              <span className="purple"> React</span> and
              <span className="purple"> React Native</span> enthusiast who truly
              loves <span className="purple">TypeScript</span>.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, Python, Node.js</b> and
                <b className="purple"> GoLang.</b>
              </i>
              <br />
              <br />I have experience working in
              <b className="purple"> big corporations, small startups</b> and as
              a solo developer—planning architecture, setting up the
              <b className="purple"> CI/CD</b>, coding applications, and
              deploying them to a server or an app store.
              <br />
              <br />
              While working on a project, I{" "}
              <i>
                <b className="purple">communicates clearly</b>
              </i>{" "}
              and always strives for a deep understanding of the client's needs
              to{" "}
              <i>
                <b className="purple">efficiently address their problems.</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://t.me/Elvis1130"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/ElvisJin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elvis-j-934261266/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:elvis.jin.1995@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default IntroduceMe;
