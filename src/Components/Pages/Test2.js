import React from 'react';
import TitleCard from '../Molecules/TitleCard'
import {Row, Col} from 'reactstrap';

function Test2() {

  return (

    <div className="App">
      
      <Row>
        <Col md='2' offset='1'> 
        {/* <h1 className = 'big-title'>Hey There</h1>
        <h3>I'm Sam</h3> */}
        <TitleCard title="this is test2" subTitle="they're great"></TitleCard>
        </Col>
       
      </Row>
      
    </div>

  );
}

export default Test2;