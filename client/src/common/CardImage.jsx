import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import H2 from './H2'
import Span from './Span'
import { COLOR_PRIMARY } from '../config/config'
import FavorityButton from './FavorityButton'

const CardImage = (props) => {

  return (
    <div>
      <Card>
        <CardImg top width="100%" height='300px' src={props.img} alt={props.title} />
        <CardBody>
          <div className="form-group">
            <H2 text={props.title} style={{color: COLOR_PRIMARY}}/><Span className={props.className} text={props.state}/>
          </div>
          <div className="form-group">
            <span className='text-muted'>{props.genre} {props.years} {props.mounths}</span>
          </div>
          <div className="form-group">
            <span className='text-muted'> <span className={props.color}>{props.statusPet}</span></span>
          </div>
          <div className="actions pull-right save-post pointer">
            <div className='col'>
              {/* <Span text='Adóptame'/> */}
              {
                props.statusPet === 'Adoptado' ?
                  <FavorityButton titleTooltip={props.title + ', ya está adoptado'} color='error' statusPet={props.statusPet}/> 
                : <FavorityButton onClick={props.onClick} titleTooltip={'Adopta a ' + props.title + '😊'} color='disabled' statusPet={'Adóptame'}/> 
              }
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardImage;