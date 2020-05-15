import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarCustom from "./Components/Organisms/NavbarCustom";
import TitleCard from "./Components/Molecules/TitleCard";
import { Row, Col } from "reactstrap";
function App() {
  return (
    <div className="App">
      <NavbarCustom> </NavbarCustom>
      <Row>
        <Col md="2" offset="1">
          {/* <h1 className = 'big-title'>Hey There</h1>
        <h3>I'm Sam</h3> */}
          <TitleCard title="I Make Apps" subTitle="they're great"></TitleCard>
        </Col>
      </Row>
    </div>
  );
}

export default App;
