import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import H1 from '../../common/H1'
import H4 from '../../common/H4'
import Paragraph from '../../common/Paragraph'
import Icon from '../../common/Icon'
import Span from '../../common/Span'

class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Span className='clearfix'>
                <H1 className='float-left display-3 mr-4' text='500'/>
                <H4 className='pt-3' text='Ocurrió un error inesperado con el servidor'/>
                <Paragraph className='text-muted float-left' text='Esta página está temporalmente fuera de servicio.'/>
              </Span>
              <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Icon className='fa fa-search'/>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Button color="info">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
