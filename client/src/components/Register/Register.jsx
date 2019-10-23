import React, { Component } from 'react';
import Header from '../Header/Header'
import { Button, Card, CardBody, CardFooter, FormGroup, FormFeedback, Label, Col, Container, Form, Input, Row } from 'reactstrap';
import { COLOR_PRIMARY } from '../../config/config'
import { connect } from 'react-redux';
import { AddNewUser } from './action/userAction'

const REGEX_ONLY_LETTER = /^[a-zA-Z ]+$/
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
const REGEX_CELLPHONE = /^[9][0-8]{7}$/
const REGEX_DNI = /^\d{7}(?:[-\s]\d{4})?$/
const REGEX_VALIDATE_PASSWORD_WEAK =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).{6,10}$/

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastName: '',
      dni: '',
      cellphone: '',
      emailAddress: '',
      username: '',
      password: '',
      inValid: false,
      empty: false,
      error: false,
      weak: false,
      day: 0,
      month: 0,
      year: 0,
      days: [],
      birthdate: Date,
      diferentOnlyLetterName: false,
      diferentOnlyLetterLastName: false,
      validOnlyNumberDni: false,
      validCellphone: false,
      invalidEmail: false,
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeDni = this.handleChangeDni.bind(this)
    this.handleChangeCellphone = this.handleChangeCellphone.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeUserName = this.handleChangeUserName.bind(this)
    this.handleChangeDay = this.handleChangeDay.bind(this)
    this.handleChangeMonth = this.handleChangeMonth.bind(this)
    this.handleChangeYear = this.handleChangeYear.bind(this)
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
  onHome(e) {
    e.preventDefault()
    this.props.history.push('/')
  }
  componentDidMount () {
   
  }
  handleChangeName (e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
    let name = this.state.name
    this.functionValidateOnlyLettersName(name)
  }
  handleChangeLastName (e) {
    e.preventDefault()
    this.setState({
      lastName: e.target.value
    })
    let lastName = this.state.lastName
    this.functionValidateOnlyLettersLastName(lastName)
  }
  handleChangeDni (e) {
    e.preventDefault()
    this.setState({
      dni: e.target.value
    })
    let dni = this.state.dni
    
    this.functionValidateOnlyNumberDni(dni)
  }
  handleChangeCellphone (e) {
    e.preventDefault()
    this.setState({
      cellphone: e.target.value
    })
    let cellphone = this.state.cellphone
    this.functionValidateCellphone(cellphone)
  }
  handleChangeEmail (e) {
    e.preventDefault()
    this.setState({
      emailAddress: e.target.value
    })
    let emailAddress = this.state.emailAddress
    this.functionValidateEmail(emailAddress)
  }
  handleChangePassword (e) {
    e.preventDefault()
    this.setState({
      password: e.target.value
    })
    let password = this.state.password
    this.functionValidateWeakPassword(password)
  }
  handleChangeUserName (e) {
    e.preventDefault()
    this.setState({
      username: e.target.value
    })
  }
  handleChangeDay (e) {
    e.preventDefault()
    this.setState({
      day: e.target.value,
    })
  }
  handleChangeMonth (e) {
    e.preventDefault()
    this.setState({
      month: e.target.value,
    })
  }
  handleChangeYear (e) {
    e.preventDefault()
    this.setState({
      year: e.target.value,
    })
  }
  // Funciones para validar los campos
  functionValidateOnlyLettersName(name) {
    if(!REGEX_ONLY_LETTER.test(name)) {
      this.setState({
        diferentOnlyLetterName: true
      })
    } else {
      this.setState({
        diferentOnlyLetterName: false
      })
    }
  }
  functionValidateOnlyLettersLastName(lastName) {
    if(!REGEX_ONLY_LETTER.test(lastName)) {
      this.setState({
        diferentOnlyLetterLastName: true
      })
    } else {
      this.setState({
        diferentOnlyLetterLastName: false
      })
    }
  }
  functionValidateOnlyNumberDni(dni) {
    if(!REGEX_DNI.test(dni)) {
      this.setState({
        validOnlyNumberDni: true
      })
    } else {
      this.setState({
        validOnlyNumberDni: false
      })
    }
  }
  functionValidateCellphone(cellphone) {
    if(!REGEX_CELLPHONE.test(cellphone)) {
      this.setState({
        validCellphone: true
      })
    } else {
      this.setState({
        validCellphone: false
      })
    }
  }
  functionValidateEmail(email) {
    if(!REGEX_EMAIL.test(email)) {
      this.setState({
        invalidEmail: true
      })
    } else {
      this.setState({
        invalidEmail: false
      })
    }
  }
  functionValidateWeakPassword(password) {
    if(!REGEX_VALIDATE_PASSWORD_WEAK.test(password)) {
      this.setState({
        weak: true
      })
    } else {
      this.setState({
        weak: false
      })
    }
  }
  functionSeparateFirstNameYMiddleName(name) {
    let regexSplite = " "
    let newFirstNameYMiddleName = name.split(regexSplite)
    return newFirstNameYMiddleName
  }
  functionFormatDate(day, month, year) {
    let birthday = year + '-' + month + '-' + day
    return birthday
  }
  async handleNewRegisterUser (e) {
    e.preventDefault()
    let day = this.state.day
    let month = this.state.month
    let year = this.state.year
    let name = this.state.name
    let birthday = this.functionFormatDate(day, month, year)
    let newFirstNameYMiddleName = this.functionSeparateFirstNameYMiddleName(name)
    
    const newRegister = {
      firstName: newFirstNameYMiddleName[0],
      middleName: newFirstNameYMiddleName[1],
      lastName: this.state.lastName,
      dni: this.state.dni,
      cellphone: this.state.cellphone,
      emailAddress: this.state.emailAddress,
      username: this.state.username,
      password: this.state.password,
      birthday: birthday
    }
    if(!this.state.diferentOnlyLetterName && !this.state.diferentOnlyLetterLastName && !this.state.validOnlyNumberDni 
      && !this.state.validCellphone && !this.state.invalidEmail && !this.state.weak) {
      await this.props.AddNewUser(newRegister)    
      this.props.history.push('/login')
    } else {
      alert('Error al ingresar datos, verifique')
    }
  }
  render() {
    const { diferentOnlyLetterName, diferentOnlyLetterLastName, validOnlyNumberDni, dni, lastName, name,
      validCellphone, cellphone, invalidEmail, emailAddress, weak, password } = this.state
    return (
      <div className="">
      <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <br/><br/><br/><br/>
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="12" xl="8">
              <Card className="mx-2">
                <CardBody className="p-4">
                  <Form>
                    <p className=""><strong>Registrate, ingresando tus datos</strong></p>
                    <FormGroup row className="my-0">
                      <Col xs="6">
                        {
                          name.length === 0 ?
                          <FormGroup>
                            <Input type="text" id="name" name="name" placeholder="Nombres" onChange={this.handleChangeName} />
                            <FormFeedback>Ingrese solo letras</FormFeedback>
                          </FormGroup> :
                          diferentOnlyLetterName ? 
                          <FormGroup>
                            <Input type="text" name="nombres" placeholder="Nombres" invalid onChange={this.handleChangeName} />
                            <FormFeedback>Ingrese solo letras</FormFeedback>
                          </FormGroup>: 
                          <FormGroup>
                           <Input type="text" name="nombres" placeholder="Nombres" valid onChange={this.handleChangeName} />
                            <FormFeedback valid>¡Bien! </FormFeedback>
                          </FormGroup>
                        }
                      </Col>
                      <Col xs="6">
                        {
                          lastName.length === 0 ?
                          <FormGroup>
                            <Input type="text" name="apellidos" placeholder="Apellidos" onChange={this.handleChangeLastName} />
                          </FormGroup> :
                          diferentOnlyLetterLastName ?
                          <FormGroup>
                            <Input type="text" name="apellidos" placeholder="Apellidos" invalid onChange={this.handleChangeLastName} />
                            <FormFeedback>¡Ingrese solo letras!</FormFeedback>
                          </FormGroup> :
                          <FormGroup>
                            <Input type="text" name="apellidos" placeholder="Apellidos" valid onChange={this.handleChangeLastName} />
                            <FormFeedback valid>¡Bien!</FormFeedback>
                          </FormGroup> 
                        }
                      </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="6">
                        {
                          dni.length === 0 ?
                          <FormGroup>
                            <Input type="text" id="dni"  name="dni" placeholder="Dni" onChange={this.handleChangeDni}/>
                          </FormGroup> :
                          validOnlyNumberDni ? 
                          <FormGroup>
                            <Input type="text"  name="dni" placeholder="Dni" invalid onChange={this.handleChangeDni}/>
                            <FormFeedback>¡Ingrese correctamente su dni!</FormFeedback>
                          </FormGroup> :
                          <FormGroup>
                            <Input type="text"  name="dni" placeholder="Dni" valid onChange={this.handleChangeDni}/>
                            <FormFeedback valid>¡Bien!</FormFeedback>
                          </FormGroup> 
                        }
                      </Col>
                      <Col xs="6">
                        {
                          cellphone.length === 0 ?
                          <FormGroup>
                            <Input type="text" name="cellphone" placeholder="N° Celular" onChange={this.handleChangeCellphone} />
                          </FormGroup> :
                          validCellphone ? 
                          <FormGroup>
                            <Input type="text" name="cellphone" placeholder="N° Celular" invalid onChange={this.handleChangeCellphone} />
                            <FormFeedback>¡Ingrese 9 dígitos como mínimo</FormFeedback>
                          </FormGroup> :
                          <FormGroup>
                            <Input type="text" name="cellphone" placeholder="N° Celular" valid onChange={this.handleChangeCellphone} />
                            <FormFeedback valid>¡Bien!</FormFeedback>
                          </FormGroup>
                        }
                      </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="12">
                        {
                          emailAddress.length === 0 ?
                          <FormGroup>
                            <Input type="email" name="emailAddress" placeholder="Correo electrónico" autoComplete="email" 
                            onChange={this.handleChangeEmail} />
                          </FormGroup> :
                          invalidEmail ? 
                          <FormGroup>
                            <Input type="email" name="emailAddress" invalid placeholder="Correo electrónico" autoComplete="email" 
                            onChange={this.handleChangeEmail} />
                            <FormFeedback>¡Ingrese correctamente su email!</FormFeedback>
                          </FormGroup> :
                          <FormGroup>
                            <Input type="email" name="emailAddress" placeholder="Correo electrónico" valid autoComplete="email" 
                            onChange={this.handleChangeEmail} />
                            <FormFeedback valid>¡Email correcto!</FormFeedback>
                          </FormGroup> 
                        }
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col xs="4">
                          <FormGroup>
                            <Label htmlFor="ccmonth">Dia</Label>
                            <Input type="select" name="day" onChange={this.handleChangeDay}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label htmlFor="ccyear">Mes</Label>
                            <Input type="select" name="month" onChange={this.handleChangeMonth}>
                              <option value="1">Enero</option>
                              <option value="2">Febrero</option>
                              <option value="3">Marzo</option>
                              <option value="4">Abril</option>
                              <option value="5">Mayo</option>
                              <option value="6">Junio</option>
                              <option value="7">Julio</option>
                              <option value="8">Agosto</option>
                              <option value="9">Setiembre</option>
                              <option value="10">Octubre</option>
                              <option value="11">Noviembre</option>
                              <option value="12">Diciembre</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label htmlFor="ccyear">Año</Label>
                            <Input type="select" name="year" onChange={this.handleChangeYear}>
                              <option>2019</option>
                              <option>2018</option>
                              <option>2017</option>
                              <option>2016</option>
                              <option>2015</option>
                              <option>2014</option>
                              <option>2013</option>
                              <option>2012</option>
                              <option>2011</option>
                              <option>2009</option>
                              <option>2008</option>
                              <option>2007</option>
                              <option>2006</option>
                              <option>2005</option>
                              <option>2004</option>
                              <option>2003</option>
                              <option>2002</option>
                              <option>2001</option>
                              <option>2000</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Input type="text" name="username" placeholder="Usuario" onChange={this.handleChangeUserName} />
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        {
                          password.length === 0 ?
                          <FormGroup>
                            <Input type="password" name="password" placeholder="Contraseña" onChange={this.handleChangePassword} />
                          </FormGroup> :
                          weak ?
                          <FormGroup>
                            <Input type="password" name="password" invalid placeholder="Contraseña" onChange={this.handleChangePassword} />
                            <FormFeedback>¡Muy débil! - La contraseña debe tener almenos de 6 a 10 carácteres. Usa mayúsculas, minúsculas, números y símbolos como !"$%^@</FormFeedback>
                          </FormGroup> :
                          <FormGroup>
                            <Input type="password" name="password" valid placeholder="Contraseña" onChange={this.handleChangePassword} />
                            <FormFeedback valid>¡Contraseña segura!</FormFeedback>
                          </FormGroup>
                        }
                      </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                      <Col xs="6">
                        <FormGroup>
                          <Button color="success" block onClick={e=>this.handleNewRegisterUser(e)}>Registrarse</Button>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Button color="danger" block onClick={e=>this.onSignIn(e)}>Cancelar</Button>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <Col xs="12">
                      <div className="text-center">
                        <label style={{marginTop: '20px'}}>¿Ya tienes cuenta? </label><button style={{color: `${COLOR_PRIMARY}`}} onClick={e=>this.onSignIn(e)} className="px-0"> Iniciar sesión</button>
                      </div>
                    </Col>
                  </Form>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default connect(null, { AddNewUser })(Register);
