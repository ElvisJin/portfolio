import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiPhp,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPostgresql,
  DiPython,
  DiDjango,
} from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiTypescript,
  SiVuedotjs,
  SiFirebase,
  SiNextdotjs,
  SiGraphql,
  SiRedux,
} from "react-icons/si";

function Techstack() {
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
      {renderTechItem(<DiJavascript1 />, "JavaScript")}
      {renderTechItem(<SiTypescript />, "TypeScript")}
      {renderTechItem(<DiNodejs />, "Node.js")}
      {renderTechItem(<DiPython />, "Python")}
      {renderTechItem(<DiPhp />, "PHP")}
      {renderTechItem(<DiReact />, "React")}
      {renderTechItem(<TbBrandReactNative />, "React Native")}
      {renderTechItem(<SiRedux />, "Redux")}
      {renderTechItem(<SiVuedotjs />, "Vue 3")}
      {renderTechItem(<SiNextdotjs />, "Next.js")}
      {renderTechItem(<DiMongodb />, "MongoDB")}
      {renderTechItem(<SiGraphql />, "GraphQL")}
      {renderTechItem(<DiPostgresql />, "PostgreSQL")}
      {renderTechItem(<SiFirebase />, "Firebase")}
      {renderTechItem(<DiDjango />, "Django")}
    </Row>
  );
}

export default Techstack;
