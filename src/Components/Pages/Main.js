import React from "react";
import TitleCard from "../Molecules/TitleCard";
import NavbarCustom from "../Organisms/NavbarCustom";
import StartingJumbo from "../Organisms/StartingJumbo";
import { Row, Col } from "reactstrap";
import Introduction from "../Organisms/Introduction";
import BigDisplay from "../Organisms/BigDisplay";

function Main() {
  return (
    <div className="App">
      {/* <NavbarCustom> </NavbarCustom> */}

      <StartingJumbo></StartingJumbo>
      <Introduction></Introduction>
      <BigDisplay></BigDisplay>
    </div>
  );
}

export default Main;
