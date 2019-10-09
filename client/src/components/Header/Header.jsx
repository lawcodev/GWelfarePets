import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="white" light expand="md">
        <NavbarBrand onClick={e=>this.props.onHome(e)}><strong>GEOPETFARE</strong></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><strong>¿Qué es?</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={e=>this.props.onSignIn(e)}><strong>Unete a GEOPETFARE</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={e=>this.props.onRedirectQuestion(e)}><strong>Preguntas frecuentes</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={e=>this.props.onRedirectEspouse(e)}><strong>Adopta</strong></NavLink>
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default Header
