import React from "react";
import { useState, setState } from "react";
import {
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
} from "reactstrap";
import Typing from "react-typing-animation";
function TitleCard({ title, subTitle, type, borderStyle }) {
  let cssMods = {
    //title card
    dark: "title-card-dark",
    action: "title-card-action",

    //border controls
    noBorder: "no-border",
    borderBottom: "border-bottom",
  };
  let cssArr = ["title-card"];
  const [subTitleState, setSubTitleState] = useState(subTitle);

  const [rerenderState, setRerenderState] = useState(true);
  const [typingElemState, setTypingElemState] = useState(
    <Typing>{subTitle}</Typing>
  );
  const rerender = () => {
    setRerenderState(false);
    setRerenderState(true);
  };

  if (subTitleState != subTitle) {
    setSubTitleState(subTitle);
    setTypingElemState(<div>subTitle</div>);
    (async () => {
      await (async () => {});
      setTypingElemState(<Typing>{subTitle}</Typing>);
    })();
  }

  cssArr.push(cssMods[type] ? cssMods[type] : "title-card-light");
  cssArr.push(cssMods[borderStyle] ? cssMods[borderStyle] : "");
  let cssString = cssArr.join(" ");
  // console.log(subTitleState);
  return (
    <Card className={cssString} outline>
      <CardBody>
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>

        <CardSubtitle style={{ minHeight: "100px !important" }}>
          {typingElemState}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
function generateTypingElement(value) {
  return <Typing>{value}</Typing>;
}

export default TitleCard;
