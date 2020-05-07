import React from 'react';

import {
  CardBody, 
  CardImg, 
  CardTitle, 
  CardSubtitle, 
  CardText, 
  Button,
  Card
} from 'reactstrap';

function TitleCard({title, subTitle, type, noBorder}) {
  let cssMods = {
    'dark': 'title-card-dark',
    'action': 'title-card-action'
  };
  let cssArr = ['title-card'];
  
  cssArr.push( (cssMods[type]) ? cssMods[type]: 'title-card-light');
  cssArr.push((noBorder)? 'no-border' : '');
  return (

    <Card className={cssArr} outline>
        
        <CardBody >
          <CardTitle><h1>{title}</h1></CardTitle>
          <CardSubtitle>{subTitle}</CardSubtitle>
          {/* <CardText>{text}}</CardText> */}
          {/* <Button>Button</Button> */}
        </CardBody>
    </Card>
  );
}

export default TitleCard;