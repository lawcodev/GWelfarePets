
import React from 'react'
import { Col, Card, CardBody } from 'reactstrap';

const CardView = props =>(
  <Col xs="12" sm="6" lg={props.lg}>
    <Card className={props.className}>
      <CardBody className="pb-0">
        <label>{props.genre}</label>
        <label>{props.text}</label>
        <h2>{props.results}</h2>
      </CardBody>
    </Card>
  </Col>
)
export default CardView




