import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import astro_1 from "../../Assets/Projects/astro/connect_1.png";
import astro_2 from "../../Assets/Projects/astro/dark_mode.png";
import astro_3 from "../../Assets/Projects/astro/dashboard_2.png";
import astro_4 from "../../Assets/Projects/astro/dashboard_3.png";
import astro_5 from "../../Assets/Projects/astro/explore_1.png";
import eGame_1 from "../../Assets/Projects/e-game/screenshot-0.png";
import eGame_2 from "../../Assets/Projects/e-game/screenshot-1.png";
import eGame_3 from "../../Assets/Projects/e-game/screenshot-2.png";
import fef_1 from "../../Assets/Projects/fef/fef_1.png";
import fef_2 from "../../Assets/Projects/fef/fef_2.png";
import fef_3 from "../../Assets/Projects/fef/fef_3.png";
import hospital_1 from "../../Assets/Projects/hospital/hospital-1.png";
import hospital_2 from "../../Assets/Projects/hospital/hospital-2.png";
import hospital_3 from "../../Assets/Projects/hospital/hospital-3.png";
import tuilip_1 from "../../Assets/Projects/tulip/tulip_1.png";
import tuilip_2 from "../../Assets/Projects/tulip/tulip_2.png";
import tuilip_3 from "../../Assets/Projects/tulip/tulip_3.png";

const hospital = {
  title: "Medical healthcare Platform",
  desc: "<p class='project-description'>🏥This medical health related project is made with React JS:atom:, React Bootstrap, Vanilla CSS💍 and Google Firebase Authentication system.<br /><br />- Users can know about provided service and available doctors<br />- Offering total 8 major health services<br />- Medical shop available with mostly needed goods</p>",
  imgs: [hospital_1, hospital_2, hospital_3],
  isLive: false,
  ghLink: "https://github.com/ElvisJin/react-healthcare-paltform",
  webLink: "https://revive-plus.web.app/",
};

const tulip = {
  title: "Solana's Yield Aggregation Homestead",
  desc: "<p class='project-description'>The dApp (decentralized application) is designed to take advantage of Solana's low cost, high efficiency blockchain; allowing the vault strategies to compound frequently.<br /><br />- Staking<br />- Farming<br />- Swap</p>",
  imgs: [tuilip_1, tuilip_2, tuilip_3],
  isLive: true,
  ghLink: "",
  webLink: "https://tulip.garden/#home",
};

const astro = {
  title: "Astro Gallery",
  desc: "<p class='project-description'>This Website is a Astro Gallery NFT paltform. It uses framer motion Library. React, Redux/Thunk, TypeScript and Rest API.<br /><br />- NFT marketplace<br />- Dajngo back-end<br />- Solidity Contract.<br />- Responsive design.</p>",
  imgs: [astro_1, astro_2, astro_3, astro_4, astro_5],
  ghLink: "https://github.com/ElvisJin/Astro-Marketplace",
  webLink: "https://astrogallery.io/",
};

const eGame = {
  title: "E-Game Shopping Cart",
  desc: "<p class='project-description'>This Website is a video game store. It uses framer motion Library. React, TypeScript.<br /><br />- Extensive catalog of games thanks to the RAWG API.<br />- Search any game you want.<br />- Games information and screenshots.<br />- Responsive design.</p>",
  imgs: [eGame_1, eGame_2, eGame_3],
  isLive: false,
  ghLink: "https://github.com/ElvisJin/3d-game-store",
  webLink: "https://bitcoyote.github.io/",
};

const fef = {
  title: "One-Stop Destination for Digital Collectibles",
  desc: "<p class='project-description'>Few and Far is the next-generation platform for experiences in Web3, including NFTs, DeFi, Gaming, and much more.<br /><br />- Staking<br />- Farming<br />- Swap<br />- Gaming</p>",
  imgs: [fef_1, fef_2, fef_3],
  isLive: true,
  ghLink: "",
  webLink: "https://fewfar.com/",
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={eGame.imgs}
              isLive={eGame.isLive}
              title={eGame.title}
              description={eGame.desc}
              ghLink={eGame.ghLink}
              webLink={eGame.webLink}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={hospital.imgs}
              isLive={hospital.isLive}
              title={hospital.title}
              description={hospital.desc}
              ghLink={hospital.ghLink}
              webLink={hospital.webLink}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={tulip.imgs}
              isLive={tulip.isLive}
              title={tulip.title}
              description={tulip.desc}
              ghLink={tulip.ghLink}
              webLink={tulip.webLink}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={astro.imgs}
              isLive={astro.isLive}
              title={astro.title}
              description={astro.desc}
              ghLink={astro.ghLink}
              webLink={astro.webLink}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={fef.imgs}
              isLive={fef.isLive}
              title={fef.title}
              description={fef.desc}
              ghLink={fef.ghLink}
              webLink={fef.webLink}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
