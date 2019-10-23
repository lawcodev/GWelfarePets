import React, { Component } from 'react'
import Header from '../Header/Header'
import Span from '../../common/Span'
import H2 from '../../common/H2'
import CardImage from '../../common/CardImage'
import { Col, Row } from 'reactstrap';

class Espouse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      pets: []
    };
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
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  async componentDidMount () {
    // const responseJson = await HandlePetGetAll()
    // this.setState({
    //   pets: responseJson
    // })
    //this.props.PetsGetAll()
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  async handleDetailPet(name, id, nameRedirect) {
    this.functionRedirect(`${nameRedirect}${id}`)
  }
  render() {
    const { pets } = this.state
    return(
      <React.Fragment>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <div className="adop container-fluid">
          <div className="sponsor-bar" style={{background: '#3f51b5'}} >
            <H2 text='ADOPTA UNA MASCOTA'/>
            <Span text='¡Encuentra a tu mascota ideal aquí!'/>
          </div>
          <br/> 
          <Row>
            {
              pets.length > 0 ? pets.map((pet) => {
                return(
                  <Col xs="12" sm="6" md="3" key={pet.idpet}>
                    <CardImage title={pet.petName.toUpperCase()} genre={pet.genre + ' | '} years={pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y'}
                    mounths={pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes'}
                    img={'../../assets/img/pets/' + pet.photo}
                    textButton='Conóceme' color='primary' variant='contained' onClick={() => this.handleDetailPet(pet.petName, pet.idpet, '/adopta/')}/>
                  </Col>
                )
              }): <Span text='Cargando...'/>
            }
          </Row>         
        </div>
      </React.Fragment>
    )
  }
}
export default Espouse