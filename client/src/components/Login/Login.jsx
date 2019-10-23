import React, { Component } from 'react';
import { Card, CardBody, Button, CardGroup, Col, FormGroup, Input, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import H1 from '../../common/H1'
import Paragraph from '../../common/Paragraph'
import Span from '../../common/Span'
import Buttons from '../../common/Buttons'
import Inputs from '../../common/Inputs'
import perro from '../../assets/img/brand/perro.png'
import { TITLE_LOGIN, SUBTITLE_L0GIN, COLOR_PRIMARY, COLOR_SECONDARY } from '../../config/config'
import Header from '../Header/Header'
import TooltipUsuario from '../../common/TooltipUsuario'
import TooltipPassword from '../../common/TooltipPassword'
import { Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import H2 from '../../common/H2'
import AuthService from '../../config/token';
const urlAuthentication = 'http://localhost:4000/api/authentication'
const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false,
      loggedIn: false,
      message: '',
      empty: '',
      open: false, 
      setOpen: false,
    }
    this.Auth = new AuthService();
  }
  componentDidMount () {
    if(this.Auth.loggedIn())
      this.props.history.replace('/home');
  }
  //#region Funciones para redireccionar
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  functionRegister (e) {
    e.preventDefault()
    this.functionRedirect('/register')
  }
  onHome(e) {
    e.preventDefault()
    this.props.history.push('/')
  }
  onSignIn(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }
  onRedirectEspouse(e) {
    e.preventDefault()
    this.props.history.push('/adopta')
  }
  onRedirectQuestion(e) {
    e.preventDefault()
    this.props.history.push('/faq')
  }
  handleFormSubmit = async (e) =>{
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    this.Auth.login(urlAuthentication,username, password) 
    .then(res =>{
      this.props.history.push('/home')
    })
    .catch(err =>{
      console.log(err)      
      this.setState({
        error: true,
        message: err
      })
    })
  }
  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  functionClickOpen() {
    if (!this.state.open) {
      this.setState({open: true})
     
    }
  }
  functionClose() {
    if (this.state.open) {
      this.setState({open: false})
    }
  }
  render() {
    const { error, open, message } = this.state
    return (
      <React.Suspense fallback={loading()}>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <br/><br/><br/><br/>
        <Container>
          <Row className="justify-content-center">
            <Col md="9">
              <CardGroup>
              <Card className="text-white bg-white py-5 d-md-down-none" style={{ width: '100%' }}>
                <CardBody className="text-center">
                  <img src={perro} alt='perro' style={{ width: '100%' }}/>
                  <br/>
                </CardBody>
                </Card>
                <Card className="p-5">
                  <CardBody>
                    <Form className="box-form">
                      <H1 text={TITLE_LOGIN}/>
                      <Paragraph className='text-muted' text={SUBTITLE_L0GIN}/>
                      {
                        error ? <Span style={{color: `${COLOR_SECONDARY}`}} text={message}/>: ''
                      }
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Inputs type='text' placeholder='Usuario' id='TooltipUsuario' required name='username' onChange={this._handleChange} autoComplete='Usuario' tooltip='Usuario' />
                        <TooltipUsuario value='Usuario'/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Inputs type='password' placeholder='Password' id='TooltipPassword' name='password' onChange={this._handleChange} autoComplete='current-password' />
                        <TooltipPassword value='Password'/>
                      </InputGroup>
                      <Row>
                        <div className="col-md-12 text-right" style={{marginTop: '-25px'}}>
                          <Col xs="12">
                            <Button style={{color: `${COLOR_PRIMARY}`}} onClick={() =>this.functionClickOpen()} color="link" className="px-0">¿Olvidaste tu contraseña?</Button>
                          </Col>
                        </div>
                      </Row>
                      <br/>
                      <Row>
                        <Col xs="4">
                          <Buttons variant='contained' color='primary' onClick={this.handleFormSubmit} text='Acceder'/>
                        </Col>
                        <Col xs="8" className="text-right">
                          <Buttons variant='outlined' color='primary' onClick={e=>this.functionRegister(e)} text='Registrar'/>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
              {/* Modal */}
              <Dialog open={open} onClose={() => this.functionClose()}>
                <DialogTitle id="alert-dialog-title"><H2 text='¿Olvidaste tu contraseña?'/></DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <FormGroup row className="my-0">
                      <Col xs="12">
                        <FormGroup>
                          <Input type="email" name="emailAddress" placeholder="Correo electrónico" autoComplete="email" 
                          onChange={this.handleChangeEmail} />
                        </FormGroup>
                        <Row>
                          <Col xs="4">
                            <Buttons variant='contained' color='primary' onClick={e=>this.onSignIn(e)} text='Recuperar'/>
                          </Col>
                          <Col xs="8" className="text-right">
                            <Buttons variant='outlined' onClick={() =>this.functionClose()} color='primary' text='Cerrar'/>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Col>
          </Row>
        </Container>
      </React.Suspense>
    );
  }
}
export default Login

