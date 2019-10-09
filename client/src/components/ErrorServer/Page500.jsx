import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import H1 from '../../common/H1'

class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <H1 className='text-muted float-left' text='No tiene autorización, para éste módulo'/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
