import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import H2 from './H2'
import Button from './Buttons'
import Span from './Span'

const CardImage = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} alt={props.title} />
        <CardBody>
          <div className="form-group">
            <H2 text={props.title}/><Span className={props.className} text={props.state}/>
          </div>
          <div className="form-group">
            <span className='text-muted'>{props.genre} {props.years} {props.mounths}</span>
          </div>
          <Button color={props.color} variant={props.variant} text={props.textButton} onClick={props.onClick} id={props.idpet}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardImage;