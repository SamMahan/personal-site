import React from "react";
import TitleCard from "../Molecules/TitleCard";
import NavbarCustom from "../Organisms/NavbarCustom";
import StartingJumbo from "../Organisms/StartingJumbo";
import { Row, Col, Container } from "reactstrap";
import DisplayCard from "../Molecules/DisplayCard";

const params = [
  {
    title: "Sherlock",
    technologyArr: ["Node/Express", "React", "MongoDb"],
    text:
      "\
    Made in collaboration with James Gelok, Sherlock is an application that tests users\
    knowledge abilities with virtual, multi-sided flash cards. It uses the data in collects from\
    test scores to learn the forgetting curve of the user and provide them with a streamlined\
    learning experience. We are currently in the 'Test Flight' stage of ios deployment and will\
    push out version 1 in the comming weeks.\
    ",
    imageLinkArr: [
      {
        src: require("../../sherlock-whole.jpg"),
        altText: "Sherlock app home page",
        caption: "Sherlock app home page",
      },
    ],
  },
];
function BigDisplay() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={{ offset: 4, size: 4 }}>
            <TitleCard
              noBorder={true}
              type="dark"
              title=" "
              subTitle=" "
            ></TitleCard>
          </Col>
        </Row>
        {params.map((paramSet) => {
          return <DisplayCard {...paramSet}></DisplayCard>;
        })}
      </Container>
    </div>
  );
}

export default BigDisplay;
