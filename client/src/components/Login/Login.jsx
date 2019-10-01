import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import H1 from '../../common/H1'
import Paragraph from '../../common/Paragraph'
import Buttons from '../../common/Buttons'
import Inputs from '../../common/Inputs'
import perro from '../../assets/img/brand/perro.png'
import { TITLE_LOGIN, SUBTITLE_L0GIN, ERROR_LOGIN} from '../../config/config'
import { HandleAuthentication } from './services/authHelper.services';
import { AUTHENTICATION_SET_TOKEN } from '../../config/httpService'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false,
      loggedIn: false
    }
  }
  //#region Funciones para redireccionar
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  
  handleFormSubmit = async (e) =>{
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    const data = { username, password }
    let result = await HandleAuthentication(data)
    if(result.status === 200) {
      this.setState({
        error: false,
        loggedIn: true
      })
      AUTHENTICATION_SET_TOKEN(result)
      this.functionRedirect('/home')
    } else {
      this.setState({
        error: true,
        loggedIn: false
      })
      this.functionRedirect('/login')
    }
  }
  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { error } = this.state
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
              <Card className="text-white bg-white py-5 d-md-down-none" style={{ width: '100%' }}>
                  <CardBody className="text-center">
                    <img src={perro} alt='perro' style={{ width: '100%' }}/>
                  </CardBody>
                </Card>
                <Card className="p-5">
                  <CardBody>
                    <Form className="box-form">
                      <H1 text={TITLE_LOGIN}/>
                      <Paragraph className='text-muted' text={SUBTITLE_L0GIN}/>
                      {
                        error ? <Paragraph className='red' text={ERROR_LOGIN}/> : ''
                      }
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Inputs type='text' placeholder='Usuario' required name='username' onChange={this._handleChange} autoComplete='Usuario' />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Inputs type='password' placeholder='Password' name='password' onChange={this._handleChange} autoComplete='current-password' />
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Buttons variant='contained' color='primary' onClick={this.handleFormSubmit} text='Ingresar'/>
                        </Col>
                      </Row>
                    </Form>
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
