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
        <Col md={{ offset: 1, size: 5 }} xs={{ offset: 1, size: 10 }}>
          <TitleCard
            title="Samuel F Mahan"
            subTitle="Entreprenuer, Coder, CTO - Evemint LLC"
            type="dark"
            borderStyle={"noBorder"}
          ></TitleCard>
        </Col>
        <Col md={{ offset: 0, size: 5 }} xs={{ offset: 1, size: 10 }}>
          <p className="big-paragraph align-center">Hi</p>
          <p className="align-center">
            I'm a full stack developer specializing in small to mid-sized web
            applications. I use the latest and buzz-wordiest technologies to
            make elegant and enjoyable user experiences.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
