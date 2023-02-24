import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elvis Jin </span>
            from <span className="purple"> Vancouver, Canada.</span>
            <br />
            <br />I am a highly-skilled{" "}
            <span className="purple">Full-Stack Developer</span> with
            <br />
            solid skills in <span className="purple">
              Node.js and Django
            </span>{" "}
            and{" "}
            <span className="purple">
              React, Angular, Vue, Svelte and TypeScript
            </span>{" "}
            on the front-end over 6 years of experience.
            <br />
            <br />
            Proficient in translating designs into{" "}
            <span className="purple">high-quality</span> code and implementing{" "}
            <span className="purple">highly-responsive</span> user interface
            components with <span className="purple">React concepts.</span>
            <br />
            <br />
            Keen on writing{" "}
            <i>
              <span className="purple">clean and reusable code</span>
            </i>{" "}
            using best practices.
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "You’ll never find a rainbow if you’re looking down!"{" "}
          </p>
          <footer className="blockquote-footer">Elvis Jin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
