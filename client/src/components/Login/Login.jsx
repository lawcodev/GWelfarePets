import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardGroup, Col, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import H1 from '../../common/H1'
import P from '../../common/P'
import H2 from '../../common/H2'
import Buttons from '../../common/Buttons'
import Inputs from '../../common/Inputs'
class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <H1 text='Login'/>
                      <P className='text-muted' text='Para ingresar registrate'/>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Inputs type='text' placeholder='Username' autoComplete='Username' />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Inputs type='password' placeholder='Password' autoComplete='current-password' />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Buttons color='primary' className='px-4' text='Login'/>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Buttons color='link' className='px-0' text='Forgot password?'/>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <H2 text='Registrate'/>
                      <P text='Unete a la comunidad de mascotas perdidas y rescatadas'/>
                      <Link to="/register">
                        <Buttons color='primary' className='mt-3' active tabIndex={-1} text='Registrate ahora'/>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
