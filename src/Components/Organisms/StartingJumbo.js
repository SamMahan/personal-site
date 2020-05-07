import React from "react";
import { useState } from "react";
import TitleCard from "../Molecules/TitleCard";
import NavbarCustom from "../Organisms/NavbarCustom";

import { Jumbotron, Container, Row, Col } from "reactstrap";

const title1Arr = ["PHP", "Javascript", "React"];
const title2Arr = ["MongoDb", "MySQL", "Eloquent ORM", "SQL Server"];
function StartingJumbo() {
  const [isIterating, setIsIterating] = useState(false);
  const [title1Index, setTitle1Index] = useState(0);
  const [title2Index, setTitle2Index] = useState(0);

  if (!isIterating) {
    produceNewTitleAtTimeInterval(title1Arr, title1Index, setTitle1Index);
    produceNewTitleAtTimeInterval(title2Arr, title2Index, setTitle2Index);
    setIsIterating(true);
  }

  return (
    <div>
      <div className="starting-jumbo-image jumbo-upper">
        <div className="starting-jumbo-inner-background">
          <Jumbotron className="starting-jumbo" fluid>
            <Container fluid>
              <Row>
                <Col lg={{ size: 4, offset: 1 }} xs="12">
                  <TitleCard
                    title="Developer"
                    subTitle={title1Arr[title1Index]}
                  ></TitleCard>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>

      <div className="starting-jumbo-image jumbo-lower">
        <div className="starting-jumbo-inner-background">
          <Jumbotron className="starting-jumbo" fluid>
            <Container fluid>
              <Row>
                <Col lg={{ size: 4, offset: 7 }} xs="12">
                  <TitleCard
                    title="Architect"
                    subTitle={title2Arr[title2Index]}
                  ></TitleCard>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
}

async function produceNewTitleAtTimeInterval(
  titleArr,
  currentIndex,
  setTitleIndexFunction
) {
  if (currentIndex == titleArr.length) {
    currentIndex = 0;
  }
  console.log(currentIndex);
  setTimeout(() => {
    setTitleIndexFunction(currentIndex);
    produceNewTitleAtTimeInterval(
      titleArr,
      currentIndex + 1,
      setTitleIndexFunction
    );
  }, 4000);
}

export default StartingJumbo;
