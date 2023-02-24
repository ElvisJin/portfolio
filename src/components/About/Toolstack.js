import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { DiNpm } from "react-icons/di";

function Toolstack() {
  const renderTooltip = (msg) => <Tooltip>{msg}</Tooltip>;
  const renderTechItem = (stack, tooltip) => (
    <OverlayTrigger placement="top" overlay={renderTooltip(tooltip)}>
      <Col xs={4} md={2} className="tech-icons">
        {stack}
      </Col>
    </OverlayTrigger>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderTechItem(<SiGithub />, "Github")}
      {renderTechItem(<SiVisualstudiocode />, "Visual Studio Code")}
      {renderTechItem(<SiPostman />, "Postman")}
      {renderTechItem(<DiNpm />, "Node Package Manager (npm)")}
      {renderTechItem(<SiDocker />, "Docker")}
    </Row>
  );
}

export default Toolstack;
