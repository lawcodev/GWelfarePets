import React, { Component } from 'react'
import Header from '../Header/Header'
import Span from '../../common/Span'
import Jumbotrons from '../../common/Jumbotrons'
import CardImage from '../../common/CardImage'
import { Col, Row } from 'reactstrap';
import { HandlePetGetAll } from '../../components/Pets/services/pets.services'

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
    const responseJson = await HandlePetGetAll()
    this.setState({
      pets: responseJson
    })
  }
  render() {
    const { pets } = this.state
    return(
      <React.Fragment>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <div className="container-fluid">
          <Jumbotrons title='Adopta una mascota' subtitle='¡Encuentra a tu compañero ideal!'/>
          <Row>
            {
              pets.length > 0 ? pets.map((pet) => {
                return(
                  <Col xs="12" sm="6" md="3" key={pet.idpet}>
                    <CardImage title={pet.petName.toUpperCase()} className={pet.color} state={pet.statusPet} genre={pet.genre + ' | '} years={pet.years > 1 ? pet.years + ' año(s) y ': pet.years + ' año y'}
                    mounths={pet.mounths > 1 ? pet.mounths + ' mes(es)': pet.mounths + ' mes'}
                    img='http://www.wuf.pe/uploads/images/wufs/PmMtx9drKUKqCLfgrlWB9SYiXH9nVean.jpg'
                    textButton='Conóceme' color='primary' variant='contained'/>
                  </Col>
                )
              }): <Span text='Cargando datos...'/>
            }
          </Row>
        </div>
      </React.Fragment>
    )
  }
}
export default Espouse