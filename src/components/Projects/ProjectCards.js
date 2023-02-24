import React from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <div className="project-card-view">
      <Carousel
        autoPlay
        infiniteLoop
        centerMode
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        className="relative"
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className="carousel-ctrl-btn left-btn"
              role="button"
              onClick={clickHandler}
            >
              <FaChevronLeft />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className="carousel-ctrl-btn right-btn"
              role="button"
              onClick={clickHandler}
            >
              <FaChevronRight />
            </div>
          );
        }}
      >
        {props.imgPaths.map((imgPath, i) => (
          <div key={i.toString()}>
            <img width="100%" src={imgPath} alt="" />
          </div>
        ))}
      </Carousel>

      <div className="project-description">
        <p className="project-title">{props.title}</p>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
      {props.ghLink !== "" && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;GitHub
        </Button>
      )}

      {props.webLink && (
        <Button
          variant="primary"
          href={props.webLink}
          target="_blank"
          style={{ marginLeft: "12px" }}
        >
          <CgWebsite /> &nbsp;
          {props.isLive ? "Live" : "Demo"}
        </Button>
      )}
    </div>
  );
}
export default ProjectCards;
