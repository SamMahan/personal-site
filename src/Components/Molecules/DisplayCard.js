import React from "react";

import { CardBody, Card, Button, Row, Col } from "reactstrap";
import TitleCard from "../Molecules/TitleCard";
import CarouselCustom from "../Molecules/CarouselCustom";
function DisplayCard({ title, technologyArr, text, imageLinkArr }) {
  let techString = "";
  let comma = "";

  for (var i in technologyArr) {
    techString += comma + technologyArr[i];
    comma = ", ";
  }
  const itemArr = imageLinkArr;
  return (
    <Row className="display-card">
      <Col xs={{ offset: 1, size: 10 }} md={{ size: 5 }}>
        <CarouselCustom itemArr={itemArr}></CarouselCustom>
      </Col>

      <Col xs={{ offset: 1, size: 10 }} md={{ offset: 0, size: 5 }}>
        <TitleCard
          borderStyle="borderBottom"
          type="dark"
          title={title}
          subTitle={techString}
        ></TitleCard>
        <p className="top-paragraph">{text}</p>
      </Col>
    </Row>
  );
}

export default DisplayCard;
