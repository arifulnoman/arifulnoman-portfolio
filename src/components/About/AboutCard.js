import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ariful Haque Noman </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am currently employed as an Intern Data Engineer at V2 Technologies Ltd.
            <br />
            I have completed BSC in Computer Science and Engineering from East West University.
            <br />
            <br />
            Apart from coding, some other activities that I would love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new stuffs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
