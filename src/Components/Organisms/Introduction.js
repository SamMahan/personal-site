import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import TitleCard from "../Molecules/TitleCard";
import { Container, Row, Col } from "reactstrap";
function Introduction() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ offset: 1, size: 10 }}>
          <TitleCard
            title="Samuel F Mahan"
            subTitle="Entreprenuer, Coder, CTO - evemint LLC"
            type="dark"
            noBorder={true}
          ></TitleCard>
        </Col>
        <Col xs={{ offset: 1, size: 10 }}>
          <p className="top-paragraph">Hi. I'm Sam and I build Apps.</p>
          <p>
            I have full stack experience using the latest front-end and
            server-side technologies for both the web and mobile. Check out my
            most recent project below!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
