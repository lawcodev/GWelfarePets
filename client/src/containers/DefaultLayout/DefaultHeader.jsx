import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, Row, FormGroup, Input, Badge, Col, DropdownToggle, Nav, NavLink } from 'reactstrap';
import { AppSidebarToggler, AppNavbarBrand } from '@coreui/react';
import { HandleAuthenticationById } from '../../components/Login/services/authHelper.services'
import { Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import AuthService from '../../config/token';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Buttons from '../../common/Buttons'
import Imagenes from '../../common/Imagenes'
import logo from '../../assets/img/brand/geo2.png'
import { COLOR_SUCCESS } from '../../config/config'

const defaultProps = {};
const propTypes = { children: PropTypes.node }

class DefaultHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      person: Object,
      open: false, setOpen: false,
      open2: false, setOpen2: false,
      authorization: false,
      lastNameConcat: ''
    }
    this.Auth = new AuthService();
  }
  async componentDidMount() {
    try {
      const profile = this.Auth.getProfile()
      const user = await HandleAuthenticationById(profile.id)
      
      this.setState({
        id: profile.id,
        person: user
      })
      let authModule = this.Auth.authorization()
      if (authModule == false) {
        this.setState({
          authorization: false
        })
      } else {
        this.setState({
          authorization: true
        })
      }
    }
    catch(err){ 
      this.Auth.logout()
    }
  }
  onHandleDetail (e) {
    e.preventDefault()
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  onDisabledUser(e) {
    e.preventDefault()
    prompt('Ingrese su contraseña por seguridad, para desabilitar su cuenta')
    this.functionRedirect('/login')
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
  functionClickOpen2() {
    if (!this.state.open2) {
      this.setState({open2: true})
    }
  }
  functionClose2() {
    if (this.state.open2) {
      this.setState({open2: false})
    }
  }
  onChangePassword (e) {
    e.preventDefault()
    alert('Tu password a sido actualizado correctamente')
    this.functionRedirect('/login')
  }
  handleDetailUser (e) {
    e.preventDefault()
  }
  
  render() {
    const { person, open, open2, authorization} = this.state
    return (
      <React.Fragment>
        <AppNavbarBrand
          full={{ src: logo, width: 130, height: 40, alt: 'Geopetfare logo'}}
          onClick={e=>this.props.onHome(e)}
        />
        {
          authorization ? <AppSidebarToggler className="d-lg-none" display="md" mobile />: ''
        }
        {
          authorization ? <AppSidebarToggler className="d-md-down-none" display="lg" />: ''
        }
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle style={{background: 'white'}}>
              <NavLink to="#" className="nav-link"><i className="icon-bell"></i>
                <Badge pill color="success"></Badge>
              </NavLink>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                ¡Tiene una solicitud nueva de aprobación!
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* Detalle del usuario y opciones */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <Imagenes src={'../../assets/img/avatars/' + person.photo} alt={person.lastName} color={COLOR_SUCCESS}/>             
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <Imagenes src={'../../assets/img/avatars/' + person.photo} alt={person.lastName} color={COLOR_SUCCESS}/>
                <strong>{person.firstName + ' ' + ((person.middleName == null)? '': person.middleName) + ' ' + person.lastName}</strong><br/>
                <span>@{(person.firstName + '' + ((person.middleName == null)? '': person.middleName)).toLowerCase()}</span>
              </DropdownItem>
              <DropdownItem onClick={(e) => this.props.onHandleDetail(e)}><i className="icon-user"></i> Perfil</DropdownItem>
              {/* <DropdownItem><i className="icon-trash"></i> Eliminar cuenta</DropdownItem> */}
              { authorization ? <DropdownItem onClick={e => this.props.onSignAdmi(e)}><i className="icon-lock"></i> Area del Admi</DropdownItem> : '' }
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="icon-logout"></i> Cerrar sesión</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Modal */}
        <Dialog open={open} onClose={() => this.functionClose()}>
          <DialogTitle id="alert-dialog-title"><h4>¿Desea eliminar su cuenta?</h4></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <FormGroup row className="my-0">
                <Col xs="12">
                  <Row>
                    <Col xs="4">
                      <Buttons color='secondary' variant='contained' style={{background: 'red'}} onClick={e=>this.onDisabledUser(e)} text='Eliminar'/>
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
        <Dialog open={open2} onClose={() => this.functionClose2()}>
          <DialogTitle id="alert-dialog-title"><h4>¿Actualizar contraseña?</h4></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <FormGroup row className="my-2">
              <Col xs="12">
                <FormGroup>
                  <Input type="password" name="Nueva contraseña" placeholder="Nueva contraseña" autoComplete="email" 
                  onChange={this.handleChangeEmail} />
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="Repetir contraseña" placeholder="Repetir contraseña" autoComplete="email" 
                  onChange={this.handleChangeEmail} />
                </FormGroup>
                <Row>
                  <Col xs="4">
                    <Buttons variant='contained' color='primary' onClick={e=> this.onChangePassword(e)} text='Actualizar'/>
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
      </React.Fragment>
      
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
