import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppSidebarToggler } from '@coreui/react';
import { AUTHENTICATION_GET_TOKEN } from '../../config/httpService'
import { HandleAuthenticationById } from '../../components/Login/services/authHelper.services'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      idemployeed: 0,
      employeed: Object,
      role: ''
    }
  }
  async componentDidMount() {
    const user = await AUTHENTICATION_GET_TOKEN()
    const id = user.data.idemployeed
    const userAuthenticated = await HandleAuthenticationById(id)
    this.setState({
      idemployeed: id,
      employeed: userAuthenticated,
      role: userAuthenticated.name
    })  
  }

  render() {
    const { employeed, role } = this.state
    return (
      <React.Fragment>
        {
          role === "trabajador" ?  <AppSidebarToggler className="d-lg-none" display="md" mobile />: ''
        }
        {
          role === "trabajador" ?  <AppSidebarToggler className="d-md-down-none" display="lg" />: ''
        }
        <Nav className="ml-auto" navbar>
          {/* Notificatio */}
          {/* <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">5</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">5</Badge></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          {/* User */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <span> {employeed.firstName + ' ' + employeed.lastName} </span>
              <img src={'../../assets/img/avatars/9.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><i className="fa fa-user"></i> Perfil</DropdownItem>
              <DropdownItem><i className="fa fa-cog"></i> Configuración</DropdownItem>
              { role === "trabajador" ? <DropdownItem onClick={e => this.props.onSignAdmi(e)}><i className="fa fa-check"></i> Area del Admi</DropdownItem> : '' }
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Cerrar sesión</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
      
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
