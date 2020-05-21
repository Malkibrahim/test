import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./header.css";
const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid className="fluid">
        <Container fluid>
          <h1 className="display-3">Take your step</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <div className="yel-dev">
        <div className="pic"></div>
      </div>
    </div>
  );
};

export default Header;
