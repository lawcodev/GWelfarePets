import React, { Component } from 'react';
import { Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import H1 from '../../common/H1'
import H4 from '../../common/H4'
import Paragraph from '../../common/Paragraph'
import Buttons from '../../common/Buttons'
class Page404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <H1 className='float-left display-3 mr-4' text='404'/>
                <H4 className='pt-3' text='Oops! Youre lost'/>
                <Paragraph className='text-muted float-left' text='The page you are looking for was not found.'/>
              </div>
              <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Buttons color='info' text='Search'/>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;
